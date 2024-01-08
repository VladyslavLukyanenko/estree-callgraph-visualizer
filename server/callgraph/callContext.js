"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallContext = void 0;
const types = require("@babel/types");
const generator_1 = require("@babel/generator");
class CallContext {
    constructor(def, callSiteExpr, callSiteTypeHint) {
        this.def = def;
        this.callSiteExpr = callSiteExpr;
        this.callSiteTypeHint = callSiteTypeHint;
        if (types.isThisExpression(this.callSiteExpr)) {
            this.callSite = "this";
        }
        else if (types.isIdentifier(callSiteExpr)) {
            this.callSite = callSiteExpr.name;
        }
        else if (types.isFunctionExpression(callSiteExpr)) {
            this.callSite = "<funcexpr>";
        }
        else if (types.isMemberExpression(callSiteExpr) && types.isIdentifier(callSiteExpr.object)) {
            this.callSite = callSiteExpr.object.name;
        }
        else if (types.isMemberExpression(callSiteExpr)) {
            this.callSite = generator_1.default(callSiteExpr.object).code;
        }
        else if (callSiteExpr) {
            this.callSite = generator_1.default(callSiteExpr).code;
        }
        if (this.calledOnThis && this.className) {
            this.callSiteTypeHint = this.className;
        }
    }
    get className() {
        return this.def?.ctx.className;
    }
    get calledOnThis() {
        return this.callSiteExpr && types.isMemberExpression(this.callSiteExpr) && types.isThisExpression(this.callSiteExpr.object);
    }
}
exports.CallContext = CallContext;
//# sourceMappingURL=callContext.js.map