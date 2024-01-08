"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncDef = void 0;
const funcDefContext_1 = require("./funcDefContext");
class FuncDef {
    constructor(name, ctx) {
        this.ctx = ctx;
        this.calls = [];
        this._name = name;
    }
    static fromFunction(node) {
        return new FuncDef(node.id.name, new funcDefContext_1.FuncDefContext(null, node));
    }
    addCall(call) {
        this.calls.push(call);
    }
    getName(fullyClassified = true) {
        if (fullyClassified && this.ctx.className) {
            return `${this.ctx.className}.${this._name}`;
        }
        return this._name;
    }
}
exports.FuncDef = FuncDef;
//# sourceMappingURL=funcDef.js.map