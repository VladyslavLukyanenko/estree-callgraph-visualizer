"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callgraphFor = void 0;
const fs = require("fs");
const types = require("@babel/types");
const parser_1 = require("@babel/parser");
const traverse_1 = require("@babel/traverse");
const callNode_1 = require("./callNode");
const callContext_1 = require("./callContext");
const funcDef_1 = require("./funcDef");
const funcDefContext_1 = require("./funcDefContext");
// const allCalls = new Set();
const contextSwitchMethods = ["bind", "call", "apply"];
function callgraphFor(jsFilePath) {
    const jsScript = fs.readFileSync(jsFilePath, { encoding: "utf8" });
    const ast = parser_1.parse(jsScript, {});
    const funcs = {};
    const decls = [];
    const addDef = (def, fns) => {
        (fns || decls).push(def);
        if (def.getName() in funcs) {
            console.warn(`${def.getName()} already exists`);
        }
        funcs[def.getName()] = def;
        return def;
    };
    const getAssignmentInScopeTo = (memberName, currentNode, path) => {
        if (path == null) {
            return;
        }
        if (types.isSequenceExpression(path.node)) {
            const untilIx = path.node.expressions.indexOf(currentNode);
            const assc = path.node.expressions.slice(0, untilIx);
            for (const e of assc) {
                if (isExpectedAssignment(e, memberName)) {
                    return e;
                }
            }
        }
        else if (types.isBlock(path.node)) {
            // todo: check if it expressionstatement and then check expression itself for match
            const expressionStatements = path.node.body.filter(e => types.isExpressionStatement(e));
            const untilIx = expressionStatements.indexOf(currentNode);
            const assc = expressionStatements.slice(0, untilIx);
            for (const e of assc) {
                if (isExpectedAssignment(e.expression, memberName)) {
                    return e.expression;
                }
            }
        }
        return getAssignmentInScopeTo(memberName, currentNode, path.parentPath);
        function isExpectedAssignment(assignment, name) {
            return assignment.type === "AssignmentExpression"
                && types.isMemberExpression(assignment.left)
                && types.isIdentifier(assignment.left.property)
                && assignment.left.property.name === name;
        }
    };
    function visitor(funcDef, fns) {
        return {
            CallExpression(path) {
                let node = path.get("callee").node;
                if (types.isCallExpression(path.parent)
                    && types.isMemberExpression(node)
                    && types.isIdentifier(node.property)
                    && contextSwitchMethods.includes(node.property.name)
                    && types.isThisExpression(path.node.arguments[0])) {
                    return; // we will skip all identifierName.bind(this)(someArg) calls
                }
                if (types.isFunctionExpression(node)) {
                    let callee = "<AnonymousFunction>_" + node.loc.start + "_" + node.loc.end;
                    // @ts-ignore
                    if (path.container?.type === "AssignmentExpression") {
                        // @ts-ignore
                        callee = path.container.left?.name || callee;
                    }
                    const def = addDef(new funcDef_1.FuncDef(callee, new funcDefContext_1.FuncDefContext(null, node)), fns);
                    path.get("callee").traverse(visitor(def, fns));
                    return;
                }
                let fnName;
                let callSite = null;
                if (types.isIdentifier(node)) {
                    fnName = getFnName(node);
                }
                else if (types.isCallExpression(node) && (types.isMemberExpression(node.callee) || types.isIdentifier(node.callee))) {
                    fnName = getFnName(node.callee);
                    if (contextSwitchMethods.includes(fnName) && types.isMemberExpression(node.callee) && types.isIdentifier(node.callee.object)) {
                        callSite = node.arguments[0];
                        fnName = node.callee.object.name;
                    }
                }
                else if (types.isMemberExpression(node)) {
                    fnName = getFnName(node);
                    callSite = node;
                }
                else {
                    fnName = "<AnonymousFunction>";
                    callSite = path.node;
                }
                let hint;
                if (callSite
                    && types.isMemberExpression(callSite)
                    && types.isMemberExpression(callSite.object)
                    && types.isIdentifier(callSite.object.property)) {
                    const assignment = getAssignmentInScopeTo(callSite.object.property.name, path.node, path.parentPath);
                    if (assignment && types.isNewExpression(assignment.right) && types.isIdentifier(assignment.right.callee)) {
                        hint = assignment.right.callee.name;
                    }
                }
                const callee = new callNode_1.CallNode(fnName, new callContext_1.CallContext(funcDef, callSite, hint));
                funcDef.addCall(callee);
                function getFnName(calleeNode) {
                    let name;
                    if (types.isIdentifier(calleeNode)) {
                        name = calleeNode.name;
                    }
                    else if (types.isMemberExpression(calleeNode)) {
                        if (types.isIdentifier(calleeNode.property)) {
                            name = calleeNode.property.name;
                        }
                        else if (calleeNode.property.type.endsWith("Literal")) {
                            name = calleeNode.property.value;
                        }
                    }
                    return name;
                }
                function toCallNode(calleeNode, callExpr) {
                    let expr = callExpr;
                    let name;
                    if (types.isIdentifier(calleeNode)) {
                        name = calleeNode.name;
                    }
                    else if (types.isMemberExpression(calleeNode)) {
                        if (types.isIdentifier(calleeNode.property)) {
                            name = calleeNode.property.name;
                        }
                        else if (calleeNode.property.type.endsWith("Literal")) {
                            name = calleeNode.property.value;
                        }
                        if (contextSwitchMethods.includes(name) && types.isIdentifier(calleeNode.object)) {
                            expr = callExpr.arguments[0];
                            name = calleeNode.object.name;
                        }
                    }
                    if (!name) {
                        return null;
                    }
                    return new callNode_1.CallNode(name, new callContext_1.CallContext(funcDef, expr));
                }
            },
        };
    }
    // traverse(ast, visitor("calls", {"calls": allCalls}));
    traverse_1.default(ast, {
        // its like possible entry points starting from which we could draw diagram
        FunctionDeclaration(path) {
            const def = addDef(funcDef_1.FuncDef.fromFunction(path.node));
            path.get("body").traverse(visitor(def, decls));
        },
        ClassDeclaration(path) {
            const className = path.get("id").node.name;
            path.traverse({
                ClassMethod(path) {
                    const methodName = path.get("key").node.name;
                    const clsMethod = addDef(new funcDef_1.FuncDef(methodName, new funcDefContext_1.FuncDefContext(className, path.node)));
                    path.get("body").traverse(visitor(clsMethod, decls));
                }
            });
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
                    impls.add(impl[0]);
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
exports.callgraphFor = callgraphFor;
function getOwnProperty(src, key) {
    if (!src.hasOwnProperty(key)) {
        return null;
    }
    return src[key];
}
function findMethod(call, functions) {
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
        } /* else {
          return defs.filter(_ => _.ctx.className !== call.callSite.ctx.className);
        }*/
    }
    return defs;
}
//# sourceMappingURL=factory.js.map