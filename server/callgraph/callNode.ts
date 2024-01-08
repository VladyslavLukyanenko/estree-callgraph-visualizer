import {CallContext} from "./callContext";
import {FuncDef} from "./funcDef";

export class CallNode {
  readonly defCandidates: FuncDef[] = [];

  constructor(readonly name: string, readonly ctx: CallContext) {
  }

  get fullName(): string {
    const callSite = this.ctx.callSite ? this.ctx.callSite + "." : "";
    return `${callSite}${this.name}`;
  }

  toString(): string {
    return `${this.fullName}, defCandidates=${this.defCandidates.length || '<EMPTY>'}`;
  }

  setDefCandidates(defs: FuncDef[]): void {
    this.defCandidates.push(...defs);
  }
}