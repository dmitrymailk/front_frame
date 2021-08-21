import {
  BaseHTMLComponent,
  BaseHTMLComponentParams,
} from "./BaseHTMLComponent";

export interface divParams {
  className?: string;
  textContent?: string;
  blocks?: BaseHTMLComponent[];
  style?: object;
}

export class div extends BaseHTMLComponent {
  constructor({
    className = "",
    textContent = "",
    blocks = [],
    style = {},
  }: divParams) {
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
  style = {},
}: divParams) {
  return new div({ className, textContent, blocks, style });
}
