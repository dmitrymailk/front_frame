import div from "../frame/html_components/div";
import { BaseAbstractComponent } from "../frame/abstract_components/BaseAbstractComponent";

interface ItemParams {
  text: string;
}

export class Item extends BaseAbstractComponent {
  text: string;

  constructor({ text = "" }: ItemParams) {
    super();
    this.text = text;
    this.update();
  }

  get components() {
    // debugger;

    return [div({ className: "todo-item", textContent: this.text })];
  }

  get style() {
    return {
      "todo-item": {
        border: "2px solid blue",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "32px",
        width: "320px",
        margin: "16px 0 0 0",
      },
    };
  }
}

export default function ({ text = "" }: ItemParams) {
  return new Item({ text });
}
