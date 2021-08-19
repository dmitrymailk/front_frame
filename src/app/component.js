import div from "../html_components/div";

export class Component {
  constructor() {
    this._blocks = [];
    this.output = null;
    this._parent = document.createElement("div");
    this.style = {};

    this._init();
    this.render();
  }
  _init() {
    this._blocks = [
      div({ textContent: "Первый элемент", classname: "test" }),
      div({ textContent: "Текст второго элемента", classname: "test2" }),
    ];
    this._style();
    this.styling();
    this.output = this._parent;
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
      let classname = this._blocks[i].classname;
      if (this.style[classname]) {
        // debugger;
        Object.assign(this._blocks[i].style, this.style[classname]);
        //  = ;
        console.log(this.style[classname]);
      }
    }
  }

  _style() {
    this.style = {
      test: {
        border: "2px solid #123123",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "32px",
        width: "320px",
        margin: "16px 0 0 0",
      },
      test2: {
        border: "2px solid blue",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "64px",
        width: "380px",
        margin: "32px 0 0 0",
      },
    };
  }
}

export default function () {
  return new Component();
}
