import { BaseAbstractComponent } from "../frame/abstract_components/BaseAbstractComponent";
import { Item } from "./Item";
import button from "../frame/html_components/button";

export class _TodoComponent extends BaseAbstractComponent {
  tasks: string[];
  counter: number;

  constructor() {
    super();
    this.tasks = ["Item1", "Item2", "Item3", "Item4", "Item5"];
    // debugger;
    this.counter = 0;
  }

  get components() {
    return [
      button({
        textContent: "Click on me!",
        className: "myButton",
        listeners: [
          // TODO сделать так чтобы передавать контекст было не нужно
          {
            click: this.addElement.bind(this),
          },
        ],
      }),
      ...this.tasks.map((text) => Item({ text: text })),
    ];
  }

  addElement() {
    console.log("add", this);
    this.tasks.unshift(`New task ${this.counter}`);
    this.counter += 1;
    // this.update();
  }

  get style() {
    return {
      myButton: {
        width: "320px",
        height: "32px",
        borderRadius: "4px",
        cursor: "pointer",
      },
    };
  }
}

export function TodoComponent() {
  return new _TodoComponent();
}
