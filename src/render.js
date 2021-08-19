import div from "./html_components/div";

export default function render() {
  const main = document.createElement("div");
  main.id = "mainBlock";
  let mainBlocks = [div({ classname: "test", textContent: "Hello" })];
  for (const element of mainBlocks) {
    main.appendChild(element.output);
  }

  document.body.appendChild(main);
}
