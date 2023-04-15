const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box1width = document.querySelector("#box1width");
const box2width = document.querySelector("#box2width");

function getBoxWidth(value) {
  return Number.parseInt(value, 10);
}
const box1value = getComputedStyle(box1).width;
const box2value = getComputedStyle(box2).width;

// const box1value = 200;
// const box2value = 400;

box1width.textContent = getBoxWidth(box1value);
box2width.textContent = getBoxWidth(box2value);
