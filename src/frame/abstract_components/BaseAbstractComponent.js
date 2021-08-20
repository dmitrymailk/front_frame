export class BaseAbstractComponent {
  constructor() {
    this._blocks = [];
    this.output = null;
    this._style = {};
    this.isAbstract = true;

    this._init();
    this.render();
  }
  _init() {
    this._parent = document.createElement("div");
    this._blocks = this.blocks();
    this._style = this.style();
    this.styling();
    this.output = this._parent;
  }

  update() {
    this._init();
    this.render();
  }

  render() {
    if (this._blocks.length > 0) {
      // TODO подумать о том как можно избежать создания оберточного элемента
      for (const element of this._blocks) {
        this._parent.appendChild(element.output);
      }
    }
  }

  styling() {
    for (let i = 0; i < this._blocks.length; i += 1) {
      if (!this._blocks[i].isAbstract) {
        let className = this._blocks[i].attributes.className;
        if (this._style[className]) {
          Object.assign(this._blocks[i]._style, this._style[className]);
        }
      }
    }
  }

  blocks() {
    return [];
  }

  style() {
    // почему это функция, а не просто описание в constructor?
    // потому что позицию написания функции можно выбирать, а конструктор нет
    return {};
  }
}
