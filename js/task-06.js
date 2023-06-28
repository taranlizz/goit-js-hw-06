const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", onFocusLose);

function onFocusLose(evt) {
  const VALUE_LENGTH = Number(evt.currentTarget.dataset.length);
  const value = evt.currentTarget.value.trim();

  evt.currentTarget.classList.remove("valid");
  evt.currentTarget.classList.add("invalid");

  if (value.length === VALUE_LENGTH) {
    evt.currentTarget.classList.remove("invalid");
    evt.currentTarget.classList.add("valid");
  }
}
