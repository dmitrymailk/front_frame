import { BaseHTMLComponent } from "./BaseHTMLComponent";

export class div extends BaseHTMLComponent {
  constructor({
    className = "",
    textContent = "",
    blocks = [],
    style = "",
  } = {}) {
    super({
      blocks,
      style,
      elementType: "div",
      attributes: { className, textContent },
    });
  }
}

export default function ({
  className = "",
  textContent = "",
  blocks = [],
  style = "",
} = {}) {
  return new div({ className, textContent, blocks, style });
}
