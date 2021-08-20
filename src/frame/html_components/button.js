import { BaseHTMLComponent } from "./BaseHTMLComponent";

export class button extends BaseHTMLComponent {
  constructor({ textContent = "", style = "", className = "" } = {}) {
    super({
      style,
      elementType: "button",
      attributes: { textContent, className },
    });
  }
}

export default function ({
  textContent = "",
  style = "",
  className = "",
} = {}) {
  return new button({ textContent, style, className });
}
