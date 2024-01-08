"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("./callgraph/factory");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use("/call-tree", (req, res) => {
    // const jsFilePath = "./experiments/methodCall.js";
    const jsFilePath = "./deobf/out_script3.js";
    const roots = factory_1.callgraphFor(jsFilePath);
    const data = roots.map(d => ({
        name: d.getName(false),
        fullName: d.getName(),
        ctx: { className: d.ctx.className },
        calls: d.calls.map(c => ({
            name: c.name,
            fullName: c.fullName,
            defCandidates: c.defCandidates.map(dc => dc.getName()),
            ctx: { calledOnThis: c.ctx.calledOnThis, callSiteTypeHint: c.ctx.callSiteTypeHint }
        }))
    }));
    // todo: just for debug purposes
    // res.json(data.filter(_ => _.name === "startTasks"));
    res.json(data);
});
const port = 8080;
app.listen(port);
console.log("Listening on " + port);
//# sourceMappingURL=index.js.map