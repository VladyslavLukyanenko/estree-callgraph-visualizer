"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallNode = void 0;
class CallNode {
    constructor(name, ctx) {
        this.name = name;
        this.ctx = ctx;
        this.defCandidates = [];
    }
    get fullName() {
        const callSite = this.ctx.callSite ? this.ctx.callSite + "." : "";
        return `${callSite}${this.name}`;
    }
    toString() {
        return `${this.fullName}, defCandidates=${this.defCandidates.length || '<EMPTY>'}`;
    }
    setDefCandidates(defs) {
        this.defCandidates.push(...defs);
    }
}
exports.CallNode = CallNode;
//# sourceMappingURL=callNode.js.map