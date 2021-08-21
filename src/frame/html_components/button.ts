import { BaseHTMLComponent } from "./BaseHTMLComponent";

export interface buttonParams {
  textContent?: string;
  style?: object;
  className?: string;
}
export class button extends BaseHTMLComponent {
  constructor({ textContent = "", style = {}, className = "" }: buttonParams) {
    super({
      style,
      elementType: "button",
      attributes: { textContent, className },
    });
  }
}

export default function ({
  textContent = "",
  style = {},
  className = "",
}: buttonParams) {
  return new button({ textContent, style, className });
}
