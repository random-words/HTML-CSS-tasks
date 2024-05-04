const textinput = document.querySelector(".input");
const list = document.querySelector(".menu");

textinput.addEventListener("change", (event) => {
  const text = event.currentTarget.value;
  const li = "<li>" + text + "</li>";
  const filteredLi = li.replace(/\s+/g, " ");
  if (filteredLi === "<li></li>" || filteredLi === "<li> </li>") {
    return;
  }

  list.insertAdjacentHTML("afterbegin", filteredLi);
});
