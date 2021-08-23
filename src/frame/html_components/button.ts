import { BaseHTMLComponent } from "./BaseHTMLComponent";

export interface buttonParams {
  textContent?: string;
  style?: object;
  className?: string;
  listeners?: object[];
}
export class button extends BaseHTMLComponent {
  constructor({
    textContent = "",
    style = {},
    className = "",
    listeners = [],
  }: buttonParams) {
    super({
      style,
      elementType: "button",
      attributes: { textContent, className },
      listeners,
    });
  }
}

export default function ({
  textContent = "",
  style = {},
  className = "",
  listeners = [],
}: buttonParams) {
  return new button({ textContent, style, className, listeners });
}
