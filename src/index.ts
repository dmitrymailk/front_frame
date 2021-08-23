import { Render, RenderParams } from "./render";

import { MainComponent } from "./MainComponent";

import "./frame/style/normalize.css";

interface AppParams {
  mainBlockSelector: string;
}

export class App {
  render: Render;
  mainBlockSelector: string;

  constructor({ mainBlockSelector = "main" }: AppParams) {
    this.mainBlockSelector = mainBlockSelector;
    let renderParams: RenderParams = {
      component: [new MainComponent()],
      mainBlockSelector: mainBlockSelector,
    };
    this.render = new Render(renderParams);

    this.init();
  }

  init() {
    this.render.init();
  }
}

window.onload = () => {
  let mainBlockSelector: string = "mainBlock";
  new App({ mainBlockSelector });
};
