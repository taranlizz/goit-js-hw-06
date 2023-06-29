function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-destroy]"),
  controlsDivEl: document.getElementById("controls"),
  containerEl: document.getElementById("boxes"),
};

const inputEl = refs.controlsDivEl.firstElementChild;

refs.createBtnEl.addEventListener("click", onCreateBtnClick);
refs.destroyBtnEl.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const markup = createBoxes(inputEl.value);
  refs.containerEl.insertAdjacentHTML("beforeend", markup);
}

function onDestroyBtnClick() {
  refs.containerEl.innerHTML = "";
}

function createBoxes(amount) {
  let size = 30;
  let markup = `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
  for (let i = 1; i < amount; i += 1) {
    markup += `<div style = "width: ${(size += 10)}px; height: ${(size += 10)}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  return markup;
}
