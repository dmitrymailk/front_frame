import {
  BaseHTMLComponent,
  BaseHTMLComponentParams,
} from "./BaseHTMLComponent";

export interface _divParams {
  className?: string;
  textContent?: string;
  blocks?: BaseHTMLComponent[];
  style?: object;
}

export class _div extends BaseHTMLComponent {
  constructor({
    className = "",
    textContent = "",
    blocks = [],
    style = {},
  }: _divParams) {
    super({
      blocks,
      style,
      elementType: "div",
      attributes: { className, textContent },
    });
  }
}

export function div({
  className = "",
  textContent = "",
  blocks = [],
  style = {},
}: _divParams) {
  return new _div({ className, textContent, blocks, style });
}
