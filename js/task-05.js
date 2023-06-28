const refs = {
  inputEl: document.getElementById("name-input"),
  spanEl: document.getElementById("name-output"),
};

refs.inputEl.addEventListener("input", onInput);

function onInput(evt) {
  const value = evt.currentTarget.value.trim();
  if (!value) {
    return (refs.spanEl.textContent = "Anonymous");
  }
  refs.spanEl.textContent = value;
}
