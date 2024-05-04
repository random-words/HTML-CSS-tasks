const button = document.querySelector(".btn");
const paragraph = document.querySelector("#p1");

button.addEventListener("click", changeColor);

function changeColor() {
  paragraph.style.color = getRandomColor();
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
