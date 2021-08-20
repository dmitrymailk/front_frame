import div from "../frame/html_components/div";
import { BaseAbstractComponent } from "../frame/abstract_components/BaseAbstractComponent";

export class Item extends BaseAbstractComponent {
  constructor({ text = "" }) {
    super();
    this.text = text;
    this.update();
  }

  blocks() {
    // debugger;

    return [div({ className: "todo-item", textContent: this.text })];
  }

  style() {
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

export default function ({ text = "" }) {
  return new Item({ text });
}
