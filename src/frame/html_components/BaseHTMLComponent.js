export class BaseHTMLComponent {
  constructor({
    attributes = {},
    elementType = "div",
    blocks = [],
    style = "",
  } = {}) {
    this.attributes = attributes;
    this._blocks = blocks;
    this._style = style;
    this._elementType = elementType;
    this.isAbstract = false;

    this._htmlElement = document.createElement(this._elementType);
    this.output = this._htmlElement;
    this._init();
  }

  _init() {
    this._addProperties();
    this._addBlocks();
    this.output = this._htmlElement;
  }

  _addProperties() {
    for (const attributeName of Object.keys(this.attributes)) {
      let attributeValue = this.attributes[attributeName];
      this._htmlElement[attributeName] = attributeValue;
    }

    if (this._style) {
      Object.assign(this._htmlElement.style, this._style);
    }
  }

  _addBlocks() {
    if (this._blocks.length > 0) {
      for (const element of this._blocks) {
        this._htmlElement.appendChild(element.output);
      }
    }
  }

  set _style(payload) {
    if (payload) {
      console.log(payload);
      Object.assign(this.output.style, payload);
    }
  }

  get _style() {
    return this.output.style;
  }
}
