let mainElem = document.querySelector("body");
// // render type 1
// let elementsList = new DocumentFragment();
// let button = document.createElement("button");
// button.textContent = "Text";
// elementsList.appendChild(button.cloneNode(true));
// elementsList.appendChild(button.cloneNode(true));
// elementsList.appendChild(button.cloneNode(true));
// elementsList.appendChild(button.cloneNode(true));

// mainElem.appendChild(elementsList);

// render experiment 1
/**
 * если тот же самый элемент переместить
 * в один блок, а затем в другой, то
 * он удалится из старого и появится в новом
 *
 * чтобы этого не произошло необходимо выполнить глубокое
 * копирование данного узла
 */
let elemOne = document.createElement("div");
let buttonOne = document.createElement("button");
buttonOne.textContent = "elemOne";
elemOne.className = "elemOne";
elemOne.appendChild(buttonOne);

let elemTwo = document.createElement("div");
elemTwo.className = "elemTwo";
elemTwo.append(buttonOne.cloneNode(true));

mainElem.append(elemOne);
mainElem.append(elemTwo);
buttonOne.textContent = "AAAAAAAAA";
