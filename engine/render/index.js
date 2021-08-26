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
    listeners = [],
  }) {
    this.components = components;
    this.isAbstract = isAbstract;

    this.rootComponent = null;
    this.htmlTag = htmlTag;
    this.attributes = attributes;

    this.listeners = listeners;

    this.init();
  }

  init() {
    if (!this.isAbstract) {
      this.rootComponent = document.createElement(this.htmlTag);
      // add attributes
      Object.assign(this.rootComponent, this.attributes);

      // add listeners
      if (this.listeners.length > 0) {
        for (const event of this.listeners) {
          let eventType = Object.keys(event)[0];
          let eventFunction = event[eventType];
          this.rootComponent.addEventListener(eventType, eventFunction);
        }
      }
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
  constructor({ components = [], className = "TodoApp", parent = null }) {
    if (parent === null) {
      console.error("Haven't parent", this);
    }

    this.components = components;
    this.className = className;
    this.rootComponent = null;
    this.parent = parent;

    this.state = {
      counter: 10,
    };

    this.init();
  }

  init() {
    this.rootComponent = document.createElement("div");
    this.rootComponent.className = this.className;

    this.components = this.initializeComponents();
    this.render();
  }

  increment() {
    this.state.counter += 1;
    console.log("hello");
    this.update();
  }

  update() {
    // this.components = this.initializeComponents();
    // this.render();
    console.log(this);
    this.init();
    this.parent.update();
  }

  initializeComponents() {
    return [
      new Component({
        attributes: { className: "clickButton", textContent: "click me" },
        htmlTag: "button",
        listeners: [{ click: this.increment.bind(this) }],
      }),
      new Component({
        attributes: { className: "name1" },
        components: [
          new Component({
            attributes: {
              className: "name1__child",
              textContent: `counter ${this.state.counter}`,
            },
          }),
          new Component({
            attributes: { className: "name1__child", textContent: "child 2" },
          }),
        ],
      }),
    ];
  }

  render() {
    for (let elem of this.components) {
      this.rootComponent.appendChild(elem.rootComponent);
    }
  }
}

class Render {
  constructor({ mainBlock = null } = {}) {
    this.components = [];
    this.mainBlock = mainBlock;

    this.prevComponents = [];

    if (this.mainBlock) this.init();
    else console.error("Main block is null");
  }

  initializeComponents() {
    return [
      new TodoApp({
        className: "TodoApp",
        parent: this,
      }),
    ];
  }

  init() {
    this.components = this.initializeComponents();

    for (let elem of this.components) {
      this.mainBlock.appendChild(elem.rootComponent);
    }
  }

  update() {
    console.log("render update");
    console.dir(this.components[0]);
    for (let i = 0; i < this.components.length; i++) {
      console.log(this.mainBlock.children[i]);
      this.mainBlock.children[i].textContent;
    }
  }
}

const render = () => {
  // render
  let mainBlock = _.$("#app");
  let render = new Render({ mainBlock: mainBlock });
};

window.onload = render;
