const firstBlock = document.querySelector("#first");
const secondBlock = document.querySelector("#second");

const fromFirstToSecond = document.querySelector(
  "[data-action='first-to-second']"
);
const fromSecondToFirst = document.querySelector(
  "[data-action='second-to-first']"
);

fromFirstToSecond.addEventListener("click", (event) => {
  // secondBlock.appendChild(firstBlock);
  // secondBlock.append(firstBlock);
  // secondBlock.insertAdjacentHTML("beforeend", firstBlock);
  $(secondBlock).detach().appendTo(firstBlock);
});
fromSecondToFirst.addEventListener("click", (event) => {
  // firstBlock.appendChild(secondBlock);
  // firstBlock.append(secondBlock);
  // firstBlock.insertAdjacentHTML("beforeend", secondBlock);
  $(firstBlock).detach().appendTo(secondBlock);
});

// Короче, там би бажано юзати бібліотеку JQuery,
// а без неї - хз
