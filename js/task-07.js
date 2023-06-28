const refs = {
  inputEl: document.getElementById("font-size-control"),
  textEl: document.getElementById("text"),
};

refs.inputEl.addEventListener("input", onInput);

function onInput(evt) {
  refs.textEl.style.fontSize = `${evt.currentTarget.value}px`;
}
