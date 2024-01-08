import {callgraphFor} from "./callgraph/factory";
import * as express from "express";
import * as cors from "cors";
import {FuncDeclData} from "../client/src/models/funcDeclData";


const app = express();
app.use(cors())
app.use("/call-tree", (req, res) => {
  // const jsFilePath = "./experiments/methodCall.js";
  const jsFilePath = "./deobf/out_script3.js";
  const roots = callgraphFor(jsFilePath);

  const data: FuncDeclData[] = roots.map(d => ({
    name: d.getName(false),
    fullName: d.getName(),
    ctx: {className: d.ctx.className},
    calls: d.calls.map(c => ({
      name: c.name,
      fullName: c.fullName,
      defCandidates: c.defCandidates.map(dc => dc.getName()),
      ctx: {calledOnThis: c.ctx.calledOnThis, callSiteTypeHint: c.ctx.callSiteTypeHint}
    }))
  }));

  // todo: just for debug purposes
  // res.json(data.filter(_ => _.name === "startTasks"));
  res.json(data);
})
const port = 8080;
app.listen(port);
console.log("Listening on " + port)
