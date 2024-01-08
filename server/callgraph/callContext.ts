import * as types from "@babel/types";
import {Node} from "@babel/types";
import generate from "@babel/generator";
import {FuncDef} from "./funcDef";

export class CallContext {
  readonly callSite?: string;
  constructor(readonly def: FuncDef, private callSiteExpr?: Node, readonly callSiteTypeHint?: string) {
    if (types.isThisExpression(this.callSiteExpr)) {
      this.callSite = "this";
    } else if (types.isIdentifier(callSiteExpr)) {
      this.callSite = callSiteExpr.name;
    } else if (types.isFunctionExpression(callSiteExpr)) {
      this.callSite = "<funcexpr>";
    } else if (types.isMemberExpression(callSiteExpr) && types.isIdentifier(callSiteExpr.object)) {
      this.callSite = callSiteExpr.object.name;
    } else if (types.isMemberExpression(callSiteExpr)) {
      this.callSite = generate(callSiteExpr.object).code;
    } else if (callSiteExpr) {
      this.callSite = generate(callSiteExpr).code;
    }

    if (this.calledOnThis && this.className) {
      this.callSiteTypeHint = this.className;
    }
  }

  get className(): string {
    return this.def?.ctx.className;
  }

  get calledOnThis(): boolean {
    return this.callSiteExpr && types.isMemberExpression(this.callSiteExpr) && types.isThisExpression(this.callSiteExpr.object);
  }
}