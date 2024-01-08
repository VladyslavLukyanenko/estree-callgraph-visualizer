import {FuncDeclContextData} from "./funcDeclContextData";
import {FuncCallData} from "./funcCallData";

export interface FuncDeclData {
  name: string;
  fullName: string;
  calls: FuncCallData[];
  ctx: FuncDeclContextData;
}
