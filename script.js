"use strict";

const sketch = document.querySelector(".sketch");
const color = document.querySelector(".color");
const rainbow = document.querySelector(".rainbow");
const pencil = document.querySelector(".pencil");
const eraser = document.querySelector(".eraser");
const gridLines = document.querySelector(".grid-lines");
const clear = document.querySelector(".clear");
const colorPicker = document.querySelector(".pen-color-box");
const backgroundColorPicker = document.querySelector(".background-color-box");
const range = document.querySelector(".range");
const rangeSize = document.querySelector(".range-size");
const newBtn = document.querySelector(".new");

let penColor = "#d9d9d9";
let currentMode = "color";

range.value = 16;

function gridSize(size) {
  for (let i = 0; i < size ** 2; i++) {
    let div = document.createElement("div");
    sketch.append(div);
    div.classList.add(`sketch-squares${i}`);
    div.classList.add(`sketch-squares0${i}`);
    document.querySelector(`.sketch-squares${i}`).style.backgroundColor =
      "'transparent'";
    div.addEventListener("mouseover", changeColor);
    div.addEventListener("mousedown", changeColor);
  }
  sketch.style.cssText = `grid-template-columns: repeat(${range.value}, 1fr)`;
}
gridSize(range.value);

////////////////////////
//     FUNCTIONS      //
////////////////////////

function setCurrentColor(color) {
  penColor = color;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function removeActive() {
  color.classList.remove("hover-when-active");
  rainbow.classList.remove("hover-when-active");
  pencil.classList.remove("hover-when-active");
  eraser.classList.remove("hover-when-active");
  color.style.cssText = "background: none; color: #fcc419;";
  rainbow.style.cssText = "background: none; color: #fcc419;";
  pencil.style.cssText = "background: none; color: #fcc419;";
  eraser.style.cssText = "background: none; color: #fcc419;";
}

function gridLinesToggle() {
  for (let i = 0; i < range.value ** 2; i++) {
    document
      .querySelector(`.sketch-squares${i}`)
      .classList.toggle("sketch-lines");
  }
  gridLines.classList.toggle("hover-when-active");
  gridLines.classList.toggle("grid-lines-click");
}

////////////////////////
//   EVENT LISTENERS  //
////////////////////////

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
backgroundColorPicker.oninput = (e) =>
  (sketch.style.backgroundColor = e.target.value);

color.addEventListener("click", function () {
  currentMode = "color";
  removeActive();
  color.classList.add("hover-when-active");
  color.style.cssText = "background-color: #fcc419; color: #eb2c2c;";
});

rainbow.addEventListener("click", function () {
  currentMode = "rainbow";
  removeActive();
  rainbow.classList.add("hover-when-active");
  rainbow.style.cssText = "background-color: #fcc419; color: #eb2c2c;";
});

pencil.addEventListener("click", function () {
  currentMode = "pencil";
  removeActive();
  pencil.classList.add("hover-when-active");
  pencil.style.cssText = "background-color: #fcc419; color: #eb2c2c;";
});

eraser.addEventListener("click", function () {
  currentMode = "eraser";
  removeActive();
  eraser.classList.add("hover-when-active");
  eraser.style.cssText = "background-color: #fcc419; color: #eb2c2c;";
});

range.addEventListener("mousemove", function () {
  rangeSize.textContent = `${range.value}x${range.value}`;
});

range.addEventListener("input", function () {
  sketch.innerHTML = "";
  gridSize(range.value);
  sketch.style.cssText = `grid-template-columns: repeat(${range.value}, 1fr)`;
  sketch.style.backgroundColor = document.querySelector(
    ".background-color-box"
  ).value;
  if (gridLines.classList.contains("hover-when-active")) {
    for (let i = 0; i < range.value ** 2; i++) {
      document
        .querySelector(`.sketch-squares${i}`)
        .classList.add("sketch-lines");
    }
  }
});

gridLines.addEventListener("click", gridLinesToggle);

clear.addEventListener("click", function () {
  for (let i = 0; i < range.value ** 2; i++) {
    document.querySelector(`.sketch-squares${i}`).style.cssText =
      "background-color: transparent;";
  }
});

////////////////////////
//    Change Color    //
////////////////////////

function changeColor(e) {
  if (e.buttons === 1) {
    if (currentMode === "color") {
      e.target.style.opacity = "1";
      e.target.style.backgroundColor = penColor;
    } else if (currentMode === "rainbow") {
      let R = getRandomInt(256);
      let G = getRandomInt(256);
      let B = getRandomInt(256);
      e.target.style.opacity = "1";
      e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    } else if (currentMode === "eraser") {
      e.target.style.cssText = "background-color: transparent;";
    } else if (currentMode === "pencil") {
      if (e.target.style.opacity == "0.1") {
        e.target.style.opacity = "0.2";
      } else if (e.target.style.opacity == "0.2") {
        e.target.style.opacity = "0.3";
      } else if (e.target.style.opacity == "0.3") {
        e.target.style.opacity = "0.4";
      } else if (e.target.style.opacity == "0.4") {
        e.target.style.opacity = "0.5";
      } else if (e.target.style.opacity == "0.5") {
        e.target.style.opacity = "0.6";
      } else if (e.target.style.opacity == "0.6") {
        e.target.style.opacity = "0.7";
      } else if (e.target.style.opacity == "0.7") {
        e.target.style.opacity = "0.8";
      } else if (e.target.style.opacity == "0.8") {
        e.target.style.opacity = "0.9";
      } else if (e.target.style.opacity == "0.9") {
        e.target.style.opacity = "0.999";
      } else if (e.target.style.opacity !== "0.999") {
        e.target.style.backgroundColor = "#000000";
        e.target.style.opacity = "0.2";
      }
    }
  }
}
