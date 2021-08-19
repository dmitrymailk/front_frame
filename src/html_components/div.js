class _div {
  constructor({
    classname = "",
    textContent = "",
    blocks = [],
    style = "",
  } = {}) {
    this.classname = classname;
    this.textContent = textContent;
    this._blocks = blocks;
    this._style = style;

    this._html_element = document.createElement("div");
    this.output = null;
    this._init();
  }

  _init() {
    this._addProperties();
    this._addBlocks();
    this.output = this._html_element;
  }

  _addProperties() {
    this._html_element.className = this.classname;
    this._html_element.textContent = this.textContent;
    this._html_element.style = this._style;
  }

  _addBlocks() {
    if (this._blocks.length > 0) {
      for (const element of this._blocks) {
        this._html_element.appendChild(element.output);
      }
    }
  }
}

export default function ({
  classname = "",
  textContent = "",
  blocks = [],
  style = "",
} = {}) {
  return new _div({ classname, textContent, blocks, style });
}
