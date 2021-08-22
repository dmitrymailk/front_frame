export interface BaseHTMLComponentParams {
  attributes?: object;
  elementType: string;
  blocks?: BaseHTMLComponent[];
  style?: object;
  listeners?: object[];
}

export class BaseHTMLComponent {
  public attributes: any;
  isVirtual: Boolean;
  output: any;
  private blocks: BaseHTMLComponent[];
  private _style: object;
  private elementType: string;
  // TODO сделать свой класс Node
  private htmlElement: any;
  private listeners: object[];

  constructor({
    attributes = {},
    elementType = "div",
    blocks = [],
    style = {},
    listeners = [],
  }: BaseHTMLComponentParams) {
    this.attributes = attributes;
    this.blocks = blocks;
    this._style = style;
    this.elementType = elementType;
    this.isVirtual = false;
    this.listeners = listeners;

    this.htmlElement = document.createElement(this.elementType);
    this.output = this.htmlElement;
    // this.init();
  }

  public init() {
    this.addProperties();
    this.addListeners();
    this.addComponents();
    this.output = this.htmlElement;
  }

  public update() {
    this.init();
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

  private addComponents() {
    if (this.blocks.length > 0) {
      for (let element of this.blocks) {
        element.update();
        this.htmlElement.appendChild(element.output);
      }
    }
  }

  private addListeners() {
    if (this.listeners.length > 0) {
      for (const event of this.listeners) {
        let eventType = Object.keys(event)[0];
        // @ts-ignore
        let eventFunction = event[eventType];
        this.htmlElement.addEventListener(eventType, eventFunction);
      }
    }
  }

  public set style(payload: object) {
    if (payload) {
      Object.assign(this.output.style, payload);
    }
  }

  public get style() {
    return this.output.style;
  }
}
