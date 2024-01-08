import {Component, OnInit, ChangeDetectionStrategy, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import * as D3 from "d3"

declare const d3: typeof D3;

@Component({
  selector: 'app-simple-visualizer',
  templateUrl: './simple-visualizer.component.html',
  styleUrls: ['./simple-visualizer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleVisualizerComponent implements OnInit, OnChanges {
  @Input() dotStr: string;
  private graphviz: typeof D3;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dotStr?.currentValue !== changes.dotStr?.previousValue) {
      this.render();
    }
  }

  private render() {
    // @ts-ignore
    this.graphviz?.renderDot(this.dotStr);
    console.log("rendered: " + this.dotStr);
  }

  ngOnInit(): void {
    this.graphviz = d3.select(this.el.nativeElement)
      // @ts-ignore
      .graphviz()
      /*    .transition(function () {
            return d3.transition("main")
              .ease(d3.easeLinear)
              .delay(0)
              .duration(1500);
          })*/
      .logEvents(false);

    this.render();
  }
}
