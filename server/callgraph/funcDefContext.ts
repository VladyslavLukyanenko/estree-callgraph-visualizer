import {Node} from "@babel/types";

export class FuncDefContext {
  constructor(readonly className: string, private node: Node) {
  }
}