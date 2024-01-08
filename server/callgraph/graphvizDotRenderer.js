"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphvizDotRenderer = void 0;
class GraphvizDotRenderer {
    constructor(diagramName) {
        this.diagramName = diagramName;
    }
    render(nodes) {
        const header = `
digraph ${this.diagramName}{
overlap=scalexy;
`;
        const footer = `
}`;
        const lines = new Set();
        const addLines = (d, called) => {
            if (!d) {
                return;
            }
            if (called.includes(d)) {
                lines.add(`"${d.getName()}" -> "${d.getName()}"`);
                return;
            }
            try {
                for (const c of d.calls) {
                    lines.add(`"${d.getName()}" -> "${c.name}"`);
                    addLines(c.defCandidates[0], [...called, d]);
                }
            }
            catch (e) {
                console.error(e);
            }
        };
        for (const r of nodes) {
            // lines.add(`"[root]" -> "${r.name}"`)
            addLines(r, []);
        }
        const body = [...lines.values()].join("\n");
        return `${header}${body}${footer}`;
    }
}
exports.GraphvizDotRenderer = GraphvizDotRenderer;
//# sourceMappingURL=graphvizDotRenderer.js.map