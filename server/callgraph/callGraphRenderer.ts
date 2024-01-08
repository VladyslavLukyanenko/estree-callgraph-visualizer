import {FuncDef} from "./funcDef";

export interface CallGraphRenderer {
  render(nodes: FuncDef[]): string;
}