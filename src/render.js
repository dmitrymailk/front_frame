import component from "./app/Component";

export default function render() {
  const main = document.createElement("div");
  main.id = "mainBlock";
  let mainBlocks = [component()];

  for (const element of mainBlocks) {
    main.appendChild(element.output);
  }

  document.body.appendChild(main);
}
