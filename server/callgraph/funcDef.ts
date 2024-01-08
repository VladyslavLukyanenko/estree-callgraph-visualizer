import {CallNode} from "./callNode";
import {FuncDefContext} from "./funcDefContext";
import {FunctionDeclaration} from "@babel/types";

export class FuncDef {
  private readonly _name: string;
  readonly calls: CallNode[] = [];

  constructor(name: string, readonly ctx: FuncDefContext) {
    this._name = name;
  }

  static fromFunction(node: FunctionDeclaration): FuncDef {
    return new FuncDef(node.id.name, new FuncDefContext(null, node));
  }

  addCall(call: CallNode): void {
    this.calls.push(call);
  }

  getName(fullyClassified = true): string {
    if (fullyClassified && this.ctx.className) {
      return `${this.ctx.className}.${this._name}`;
    }

    return this._name;
  }
}