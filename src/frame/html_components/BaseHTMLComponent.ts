export interface BaseHTMLComponentParams {
  attributes?: object;
  elementType: string;
  blocks?: BaseHTMLComponent[];
  style?: object;
}

export class BaseHTMLComponent {
  public attributes: any;
  isAbstract: Boolean;
  output: any;
  private blocks: BaseHTMLComponent[];
  private _style: object;
  private elementType: string;
  // TODO сделать свой класс Node
  private htmlElement: any;

  constructor({
    attributes = {},
    elementType = "div",
    blocks = [],
    style = {},
  }: BaseHTMLComponentParams) {
    this.attributes = attributes;
    this.blocks = blocks;
    this._style = style;
    this.elementType = elementType;
    this.isAbstract = false;

    this.htmlElement = document.createElement(this.elementType);
    this.output = this.htmlElement;
    this.init();
  }

  private init() {
    this.addProperties();
    this.addBlocks();
    this.output = this.htmlElement;
  }

  private addProperties() {
    for (const attributeName of Object.keys(this.attributes)) {
      let attributeValue = this.attributes[attributeName];
      this.htmlElement[attributeName] = attributeValue;
    }

    if (this.style) {
      Object.assign(this.htmlElement.style, this._style);
    }
  }

  private addBlocks() {
    if (this.blocks.length > 0) {
      for (const element of this.blocks) {
        this.htmlElement.appendChild(element.output);
      }
    }
  }

  public set style(payload: object) {
    if (payload) {
      // console.log(payload);
      Object.assign(this.output.style, payload);
    }
  }

  public get style() {
    return this.output.style;
  }
}
