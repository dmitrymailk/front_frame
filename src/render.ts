import { TodoComponent } from "./app/TodoComponent";

export default function render() {
  const main = document.createElement("div");
  main.id = "mainBlock";
  let mainBlocks = [TodoComponent()];

  for (const element of mainBlocks) {
    element.update();
    // @ts-ignore
    main.appendChild(element.output);
  }

  document.body.appendChild(main);
}
