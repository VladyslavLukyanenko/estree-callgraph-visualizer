import {CallGraphRenderer} from "./callGraphRenderer";
import {CallNode} from "./callNode";
import {FuncDef} from "./funcDef";

export class GraphvizDotRenderer implements CallGraphRenderer {
  constructor(readonly diagramName: string) {
  }

  render(nodes: FuncDef[]): string {
    const header = `
digraph ${this.diagramName}{
overlap=scalexy;
`

    const footer = `
}`;

    const lines = new Set();
    const addLines = (d: FuncDef, called: FuncDef[]) => {
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
      } catch (e) {
        console.error(e);
      }

    }
    for (const r of nodes) {
      // lines.add(`"[root]" -> "${r.name}"`)
     addLines(r, []);
    }

    const body = [...lines.values()].join("\n");

    return `${header}${body}${footer}`;
  }

}