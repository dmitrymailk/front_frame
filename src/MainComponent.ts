import { BaseHTMLComponent } from "./frame/html_components/BaseHTMLComponent";
import { BaseAbstractComponent } from "./frame/abstract_components/BaseAbstractComponent";

import { TodoComponent } from "./app/TodoComponent";

export interface MainComponentParams {
  components?: (BaseHTMLComponent | BaseAbstractComponent)[];
}
export class MainComponent extends BaseAbstractComponent {
  // components: (BaseHTMLComponent | BaseAbstractComponent)[]

  constructor() {
    super();
  }

  get components() {
    return [TodoComponent()];
  }
}
