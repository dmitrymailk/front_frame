export interface BaseAbstractComponentParams {
  isVirtual?: Boolean;
}

import { BaseHTMLComponent } from "../html_components/BaseHTMLComponent";

export class BaseAbstractComponent {
  private _components: (BaseHTMLComponent | BaseAbstractComponent)[];
  output: BaseHTMLComponent | BaseAbstractComponent;
  private _style: object;
  isVirtual: Boolean;
  private parent: any;

  constructor({ isVirtual = true }: BaseAbstractComponentParams = {}) {
    this._components = [];
    this.output = null;
    this._style = {};
    this.isVirtual = isVirtual;

    this.init();
    this.render();
  }

  private init() {
    this.parent = document.createElement("div");
    this._components = this.components;
    this._style = this.style;
    this.styling();
    this.output = this.parent;
  }

  public update() {
    this.init();
    this.render();
  }

  render() {
    if (this._components.length > 0) {
      // TODO подумать о том как можно избежать создания оберточного элемента
      for (const element of this._components) {
        this.parent.appendChild(element.output);
      }
    }
  }

  styling() {
    /**
     * пока я не знаю как можно быстрее исправить ошибки линтера
     * скорее всего нужно будет создать еще класс style чтобы полностью
     * регламинтировать поведение стилей
     */
    for (let i = 0; i < this._components.length; i += 1) {
      if (!this._components[i].isVirtual) {
        let className = (this._components[i] as BaseHTMLComponent).attributes
          .className;
        // @ts-ignore
        if (this._style[className]) {
          // @ts-ignore
          Object.assign(this._components[i].style, this._style[className]);
        }
      }
    }
  }

  get components(): (BaseHTMLComponent | BaseAbstractComponent)[] {
    return [];
  }

  get style(): object {
    // почему это функция, а не просто описание в constructor?
    // потому что позицию написания функции можно выбирать, а конструктор нет
    return {};
  }
}
