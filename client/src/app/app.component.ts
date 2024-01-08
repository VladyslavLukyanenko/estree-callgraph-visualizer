import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {NzFormatEmitEvent, NzTreeComponent, NzTreeNode, NzTreeNodeOptions} from "ng-zorro-antd/tree";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, combineLatest, Observable, Subject} from "rxjs";
import {FuncDeclData} from "../models/funcDeclData";
import {map, takeUntil} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {FuncCallData} from "../models/funcCallData";

const maxDeep = 10;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  data$ = new BehaviorSubject<FuncDeclData[]>([]);
  nodes$: Observable<NzTreeNodeOptions[]>;
  searchTerm$ = new BehaviorSubject<string>(null);
  dotStr$ = new BehaviorSubject<string>(null);
  search = new FormControl();
  destroy$ = new Subject<void>();

  @ViewChild("tree", {static: true}) treeComponent: NzTreeComponent;
  @ViewChild("treeWrap", {static: true}) treeWrap: ElementRef<HTMLElement>;

  constructor(private http: HttpClient) {
  }

  @HostListener("window:resize", ["$event"])
  updateTreeHeightOnWindowResize(): void {
    if (!this.treeWrap) {
      return;
    }

    this.updateTreeHeight();
  }

  private updateTreeHeight(): void {
    const treeHeight = this.treeWrap.nativeElement.clientHeight;
    this.treeComponent.nzVirtualHeight = treeHeight + "px";
    this.treeComponent.renderTree();
    console.log("Height updated");
  }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(v => {
        if (!v || !v?.trim()) {
          v = null;
        }

        this.searchTerm$.next(v);
      });

    this.nodes$ = combineLatest([this.data$, this.searchTerm$])
      .pipe(
        map(([data, searchTerm]) => {
          const normalizedSearchTerm = searchTerm?.toLowerCase() || null;
          let nodes = data.map(AppComponent.mapDefToTreeNode);
          if (normalizedSearchTerm) {
            nodes = nodes.filter(n => n.title.toLowerCase().includes(normalizedSearchTerm)
              || n.children.some(c => c.title.toLowerCase().includes(normalizedSearchTerm)))
          }

          return nodes;
        })
      );

    this.http.get<FuncDeclData[]>("http://localhost:8080/call-tree")
      .subscribe(r => {
        this.data$.next(r);
      });
  }

  ngAfterViewInit(): void {
    this.updateTreeHeight();
  }

  private static mapDefToTreeNode(d: FuncDeclData): NzTreeNodeOptions {
    return {
      title: d.fullName,
      key: d.fullName,
      expanded: true,
      source: {def: d},
      children: d.calls.map(c => AppComponent.mapCallToTreeNode(c, d))
    };
  }

  private static mapCallToTreeNode(c: FuncCallData, d: FuncDeclData, baseKey?: string): NzTreeNodeOptions {
    const ns = c.ctx.callSiteTypeHint ? `[${c.ctx.callSiteTypeHint}]` : "";
    return {
      title: ns + c.fullName,
      isLeaf: !c.defCandidates.length,
      disableCheckbox: true,
      source: {call: c, def: d},
      key: [baseKey, d.fullName, c.fullName].filter(it => !!it).join(" -> ")
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  expandLazyTreeNode(node: NzTreeNode, recursively: boolean = false, deepLevel: number = 0): void {
    if (deepLevel >= maxDeep) {
      return;
    }

    const call: FuncCallData = node.origin.source.call;
    if (this.isNodeAlreadyExpanded(node)) {
      return;
    }

    if (call && !!call.defCandidates.length) {
      // const def: FuncCallData = e.node.origin.source.def;

      const candidateName = call.defCandidates[0];
      const candidate = this.data$.value.find(_ => _.fullName === candidateName);
      if (!candidate) {
        throw new Error("Can't find funcDef for " + candidateName);
      }

      const expandedCalls = candidate.calls.map(c => AppComponent.mapCallToTreeNode(c, candidate, node.key));
      node.addChildren(expandedCalls);
    }

    this.setNodeExpanded(node, true);
    if (recursively) {
      for (const c of node.children) {
        this.expandLazyTreeNode(c, recursively, deepLevel + 1);
      }
    }
  }

  renderDotFromCheckedNodes(checkedNodes: NzTreeNode[]) {
    const diagramName = "CallsGraph"
    const header = `
digraph ${diagramName}{
overlap=scalexy;
`

    const footer = `
}`;
    const lines: string[] = [];
    checkedNodes.forEach(n => {
      // this.expandLazyTreeNode(n, true);
      lines.push(...this.renderDotFromNode(n));
    });
    const body = lines.join("\n");

    const dot = `${header}${body}${footer}`;
    this.dotStr$.next(dot);
  }


  renderDotFromNode(node: NzTreeNode): string[] {
    const lines = new Set<string>();
    const sanitize = n => n.replace(/"/gmi, "'");
    const addLines = (d: NzTreeNode, called: string[]) => {
      if (!d) {
        return;
      }

      if (called.includes(d.key)) {
        lines.add(`"${sanitize(d.title)}" -> "${sanitize(d.title)}"`);
        return;
      }

      try {
        for (const c of d.children) {
          lines.add(`"${sanitize(d.title)}" -> "${sanitize(c.title)}"`);

          addLines(c, [...called, d.key]);
        }
      } catch (e) {
        console.error(e);
      }
    }

    lines.add(`"[root]" -> "${sanitize(node.title)}"`);
    addLines(node, []);

    return [...lines.values()];
  }

  expandNodeAndRerender(e: NzFormatEmitEvent): void {
    if (!e.node.isExpanded) {
      if (this.isManuallyExpanded(e.node)) {
        e.node.clearChildren();
        this.setNodeExpanded(e.node, false);
      }
    } else {
      this.expandLazyTreeNode(e.node);
    }

    this.renderDotFromCheckedNodes(this.treeComponent.getCheckedNodeList());
  }

  private setNodeExpanded(node: NzTreeNode, value: boolean): void {
    node.origin.alreadyExpanded = value;
  }

  private isNodeAlreadyExpanded(node: NzTreeNode): boolean {
    return node.origin.alreadyExpanded;
  }

  private isManuallyExpanded(node: NzTreeNode): boolean {
    return "alreadyExpanded" in node.origin;
  }
}
