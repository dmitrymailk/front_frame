// пока специально не буду разбивать все по классам и отдельным функциям чтобы не тратить время на переписывание

let _ = {
  $: (selector) => document.querySelector(selector),
};

class Component {
  constructor({
    components = [],
    isAbstract = false,
    htmlTag = "div",
    attributes = {
      textContent: "",
      className: "",
    },
  }) {
    this.components = components;
    this.isAbstract = isAbstract;

    this.rootComponent = null;
    this.htmlTag = htmlTag;
    this.attributes = attributes;

    this.init();
  }

  init() {
    if (!this.isAbstract) {
      this.rootComponent = document.createElement(this.htmlTag);
      // add attributes
      Object.assign(this.rootComponent, this.attributes);
    } else {
      this.rootComponent = new DocumentFragment();
    }

    // render
    for (let elem of this.components) {
      this.rootComponent.appendChild(elem.rootComponent);
    }
  }
}

class TodoApp {
  constructor({ components = [], className = "TodoApp" }) {
    this.components = components;
    this.className = className;
    this.rootComponent = null;

    this.init();
  }

  init() {
    this.rootComponent = document.createElement("div");
    this.rootComponent.className = this.className;

    for (let elem of this.components) {
      this.rootComponent.appendChild(elem.rootComponent);
    }
  }
}

class Render {
  constructor({ components = [], mainBlock = null } = {}) {
    this.components = components;
    this.mainBlock = mainBlock;

    if (this.mainBlock) this.init();
    else console.error("Main block is null");
  }

  init() {
    if (this.mainBlock)
      for (let elem of this.components) {
        console.log(elem);
        this.mainBlock.appendChild(elem.rootComponent);
      }
  }
}

const render = () => {
  let COMPONENTS = [
    new TodoApp({
      className: "TodoApp",
      components: [
        new Component({
          attributes: { className: "clickButton", textContent: "click me" },
          htmlTag: "button",
        }),
        new Component({
          attributes: { className: "name1" },
          components: [
            new Component({
              attributes: { className: "name1__child", textContent: "child 1" },
            }),
            new Component({
              attributes: { className: "name1__child", textContent: "child 2" },
            }),
          ],
        }),
      ],
    }),
  ];

  // render
  let mainBlock = _.$("#app");
  new Render({ components: COMPONENTS, mainBlock: mainBlock });
};

window.onload = render;
