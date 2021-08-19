import "./style.css";
import img from "./img.jpg";

export default function bar() {
  const elem = document.createElement("div");

  elem.innerHTML = `Hello world`;
  elem.classList.add("test");

  const image = new Image();
  image.src = img;
  elem.appendChild(image);

  return elem;
}

document.body.appendChild(bar());
