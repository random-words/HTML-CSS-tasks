const hideBtn = document.querySelector("[data-action='hide']");
const showBtn = document.querySelector("[data-action='show']");

const text = document.querySelector(".text");

hideBtn.addEventListener("click", (event) => {
  text.setAttribute("style", "display: none;");
});
showBtn.addEventListener("click", (event) => {
  text.setAttribute("style", "display: block");
});
