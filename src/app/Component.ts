import { BaseAbstractComponent } from "../frame/abstract_components/BaseAbstractComponent";
import Item from "./Item";
import button from "../frame/html_components/button";

export class Component extends BaseAbstractComponent {
  constructor() {
    super();
  }

  get components() {
    let tasks = ["Item1", "Item2", "Item3", "Item4", "Item5"];
    return [
      button({ textContent: "Click on me!", className: "myButton" }),
      ...tasks.map((text) => Item({ text: text })),
    ];
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

export default function () {
  return new Component();
}
