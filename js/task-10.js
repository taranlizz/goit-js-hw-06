function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-destroy]"),
  divEl: document.getElementById("controls"),
  divBoxesEl: document.getElementById("boxes"),
};
const inputEl = refs.divEl.firstElementChild;

refs.createBtnEl.addEventListener("click", onCreateBtnClick);

function onCreateBtnClick() {
  const markup = createBoxes(inputEl.value);
  console.log(markup);
  refs.divBoxesEl.insertAdjacentHTML("beforeend", markup);
}

///ПРОДУМАТЬ ЛОГИКУ ДОБАВЛЕНИЯ КВАДРАТОВ!!!!!
function createBoxes(amount = 0) {
  let tmp = 30;
  let markup = `<div style = "width: ${tmp}px; height: ${tmp}px; background-color: ${getRandomHexColor()}"></div>`;
  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style = "width: ${tmp + 10}px; height: ${
      tmp + 10
    }px; background-color: ${getRandomHexColor()}"></div>`;
  }
  return markup;
}

createBoxes(3);

////
