import {FuncCallContextData} from "./funcCallContextData";

export interface FuncCallData {
  name: string;
  fullName: string;
  ctx: FuncCallContextData;
  defCandidates: string[];
}
