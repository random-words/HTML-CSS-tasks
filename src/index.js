const slider = document.querySelector("#myRange");
const output = document.querySelector(".value");
const text = document.querySelector(".text");

output.innerHTML = slider.value;
text.style.fontSize = slider.value + "px";

slider.addEventListener("input", (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
});
