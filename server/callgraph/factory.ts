import * as fs from "fs";
import {
  AssignmentExpression,
  CallExpression, ExpressionStatement,
  FunctionExpression,
  Identifier,
  MemberExpression,
  Node
} from "@babel/types";
import * as types from "@babel/types";
import {parse as parserParse} from "@babel/parser";
import traverse from "@babel/traverse";
import {CallNode} from "./callNode";
import {CallContext} from "./callContext";
import {FunctionsMap} from "./functionsMap";
import {FuncDef} from "./funcDef";
import {FuncDefContext} from "./funcDefContext";

export interface NodePath<TNode = Node> {
  findParent(callback: any): any;

  find(callback: any): any;

  get(key: string, context?: boolean): NodePath;

  traverse(visitor: any): void;

  contexts: any[];
  state: any;
  opts: any;
  skipKeys: any;
  parentPath: NodePath;
  container: NodePath | Node | Node[];
  listKeys?: string;
  key: string | number;
  node: TNode;
  type: Node["type"],
  parent: Node,
  hub?: any;
  data?: any;
  context: any;
  scope: any;
}

// const allCalls = new Set();
const contextSwitchMethods = ["bind", "call", "apply"];

export function callgraphFor(jsFilePath: string): FuncDef[] {
  const jsScript = fs.readFileSync(jsFilePath, {encoding: "utf8"});
  const ast = parserParse(jsScript, {});
  const funcs: FunctionsMap = {};
  const decls: FuncDef[] = [];

  const addDef = (def: FuncDef, fns?: FuncDef[]) => {
    (fns || decls).push(def);
    if (def.getName() in funcs) {
      console.warn(`${def.getName()} already exists`);
    }

    funcs[def.getName()] = def;
    return def;
  }


  const getAssignmentInScopeTo = (memberName: string, currentNode: Node, path: NodePath): AssignmentExpression | null => {
    if (path == null) {
      return;
    }

    if (types.isSequenceExpression(path.node)) {
      const untilIx = path.node.expressions.indexOf(currentNode as any);
      const assc = path.node.expressions.slice(0, untilIx);
      for (const e of assc) {
        if (isExpectedAssignment(e, memberName)) {
          return e;
        }
      }
    } else if (types.isBlock(path.node)) {
      // todo: check if it expressionstatement and then check expression itself for match
      const expressionStatements = path.node.body.filter(e => types.isExpressionStatement(e)) as ExpressionStatement[];
      const untilIx = expressionStatements.indexOf(currentNode as any);
      const assc = expressionStatements.slice(0, untilIx);
      for (const e of assc) {
        if (isExpectedAssignment(e.expression, memberName)) {
          return e.expression;
        }
      }
    }

    return getAssignmentInScopeTo(memberName, currentNode, path.parentPath);
    function isExpectedAssignment(assignment: Node, name: string): assignment is AssignmentExpression {
      return assignment.type === "AssignmentExpression"
        && types.isMemberExpression(assignment.left)
        && types.isIdentifier(assignment.left.property)
        && assignment.left.property.name === name;
    }
  }

  function visitor(funcDef: FuncDef, fns?: FuncDef[]) {
    return {
      CallExpression(path: NodePath<CallExpression>) {
        let node = path.get("callee").node;
        if (
          types.isCallExpression(path.parent)
          && types.isMemberExpression(node)
          && types.isIdentifier(node.property)
          && contextSwitchMethods.includes(node.property.name)
          && types.isThisExpression(path.node.arguments[0])
        ) {
          return; // we will skip all identifierName.bind(this)(someArg) calls
        }
        if (types.isFunctionExpression(node)) {
          let callee = "<AnonymousFunction>_" + node.loc.start + "_" + node.loc.end;
          // @ts-ignore
          if (path.container?.type === "AssignmentExpression") {
            // @ts-ignore
            callee = path.container.left?.name || callee;
          }

          const def = addDef(new FuncDef(callee, new FuncDefContext(null, node)), fns);
          path.get("callee").traverse(visitor(def, fns))
          return;
        }

        let fnName: string;
        let callSite: Node = null;
        if (types.isIdentifier(node)) {
          fnName = getFnName(node);
        } else if (types.isCallExpression(node) && (types.isMemberExpression(node.callee) || types.isIdentifier(node.callee))) {
          fnName = getFnName(node.callee);

          if (contextSwitchMethods.includes(fnName) && types.isMemberExpression(node.callee) && types.isIdentifier(node.callee.object)) {
            callSite = node.arguments[0];
            fnName = node.callee.object.name;
          }
        } else if (types.isMemberExpression(node)) {
          fnName = getFnName(node);
          callSite = node;
        } else {
          fnName = "<AnonymousFunction>";
          callSite = path.node;
        }

        let hint: string;
        if (
          callSite
          && types.isMemberExpression(callSite)
          && types.isMemberExpression(callSite.object)
          && types.isIdentifier(callSite.object.property)
        ) {
          const assignment = getAssignmentInScopeTo(callSite.object.property.name, path.node, path.parentPath);
          if (assignment && types.isNewExpression(assignment.right) && types.isIdentifier(assignment.right.callee)) {
            hint = assignment.right.callee.name;
          }
        }

        const callee = new CallNode(fnName, new CallContext(funcDef, callSite, hint))
        funcDef.addCall(callee);

        function getFnName(calleeNode: MemberExpression | Identifier): string {
          let name: string;
          if (types.isIdentifier(calleeNode)) {
            name = calleeNode.name;
          } else if (types.isMemberExpression(calleeNode)) {
            if (types.isIdentifier(calleeNode.property)) {
              name = calleeNode.property.name;
            } else if (calleeNode.property.type.endsWith("Literal")) {
              name = (calleeNode.property as any).value;
            }
          }

          return name;
        }

        function toCallNode(calleeNode: MemberExpression | Identifier | FunctionExpression, callExpr: CallExpression): CallNode {
          let expr: Node = callExpr;
          let name: string;
          if (types.isIdentifier(calleeNode)) {
            name = calleeNode.name;
          } else if (types.isMemberExpression(calleeNode)) {
            if (types.isIdentifier(calleeNode.property)) {
              name = calleeNode.property.name;
            } else if (calleeNode.property.type.endsWith("Literal")) {
              name = (calleeNode.property as any).value;
            }

            if (contextSwitchMethods.includes(name) && types.isIdentifier(calleeNode.object)) {
              expr = callExpr.arguments[0];
              name = calleeNode.object.name;
            }
          }

          if (!name) {
            return null;
          }

          return new CallNode(name, new CallContext(funcDef, expr));
        }
      },
    };
  }

  // traverse(ast, visitor("calls", {"calls": allCalls}));

  traverse(ast, {

    // its like possible entry points starting from which we could draw diagram
    FunctionDeclaration(path) {
      const def = addDef(FuncDef.fromFunction(path.node))
      path.get("body").traverse(visitor(def, decls));
    },

    ClassDeclaration(path) {
      const className = path.get("id").node.name;

      path.traverse({
        ClassMethod(path) {
          const methodName = path.get("key").node.name;
          const clsMethod = addDef(new FuncDef(methodName, new FuncDefContext(className, path.node)));
          path.get("body").traverse(visitor(clsMethod, decls))
        }
      })
    },
  });

  const impls = new Set();
  for (const node of Object.values(funcs)) {
    for (const child of node.calls) {
      let impl = getOwnProperty(funcs, child.name) || findMethod(child, funcs);
      if (impl) {
        if (!Array.isArray(impl)) {
          impl = [impl];
        }
        child.setDefCandidates(impl);
        if (impl.length === 1) {
          impls.add(impl[0])
        }
      }
    }
  }

  return decls; //.filter(it => !it.impl/* && !impls.has(it)*/);

  function getCallName(r) {
    let name = r.name;
    // return name;
    const tokens = name.split(".");
    if (tokens.length === 2) {
      name = tokens[1];
    }
    return name;
  }
}

function getOwnProperty(src: any, key: string): any {
  if (!src.hasOwnProperty(key)) {
    return null;
  }

  return src[key];
}

function findMethod(call: CallNode, functions: FunctionsMap): FuncDef[] {
  if (call.ctx.callSiteTypeHint) {
    const mangledName = `${call.ctx.callSiteTypeHint}.${call.name}`;
    const candidate = functions[mangledName];
    if (candidate) {
      return [candidate];
    }
  }

  const mangledNameSuffix = "." + call.name;
  const candidates = Object.keys(functions)
    .filter(it => functions.hasOwnProperty(it) && it.endsWith(mangledNameSuffix));
  if (candidates.length > 1) {
    console.warn("many matches for " + call.name + ", count = " + candidates.length);
  }

  const first = candidates[0];
  if (!first) {
    return null;
  }

  const defs = candidates.map(c => functions[c]);
  if (call.ctx.className) {
    if (call.ctx.calledOnThis && defs.length === 2) {
      return defs.filter(_ => _.ctx.className === call.ctx.className);
    }/* else {
      return defs.filter(_ => _.ctx.className !== call.callSite.ctx.className);
    }*/
  }

  return defs;
}
