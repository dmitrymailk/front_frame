// types
import { BaseHTMLComponent } from "./frame/html_components/BaseHTMLComponent";
import { BaseAbstractComponent } from "./frame/abstract_components/BaseAbstractComponent";

export interface RenderParams {
  component?: BaseAbstractComponent[];
  mainBlockSelector?: string;
}

export class Render {
  component: (BaseHTMLComponent | BaseAbstractComponent)[];
  output: any;
  mainBlockSelector: string;

  constructor({ component = [], mainBlockSelector = "body" }: RenderParams) {
    this.component = component;
    this.output = document.createElement("div");
    this.mainBlockSelector = mainBlockSelector;
  }

  init() {
    this.output.id = this.mainBlockSelector;

    for (let element of this.component) {
      element.update();
      // @ts-ignore
      this.output.appendChild(element.output);
    }

    document.body.appendChild(this.output);
  }

  update() {
    for (let element of this.component) {
      element.update();
      // @ts-ignore
      this.output.appendChild(element.output);
    }

    document.body.appendChild(this.output);
  }
}
