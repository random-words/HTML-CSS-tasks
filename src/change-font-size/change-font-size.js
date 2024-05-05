const slider = document.querySelector("#myRange");
const output = document.querySelector(".value");
const text = document.querySelector(".text");

output.innerHTML = slider.value;
text.style.fontSize = slider.value + "px";

slider.oninput = function () {
  text.style.fontSize = this.value + "px";
};
