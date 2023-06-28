const refs = {
  decrementBtnEl: document.querySelector('[data-action="decrement"]'),
  incrementBtnEl: document.querySelector('[data-action="increment"]'),
  counterSpanEl: document.getElementById("value"),
};

refs.decrementBtnEl.addEventListener("click", onDecrement);
refs.incrementBtnEl.addEventListener("click", onIncrement);

let counterValue = 0;

function onDecrement() {
  counterValue -= 1;
  refs.counterSpanEl.textContent = counterValue;
}

function onIncrement() {
  counterValue += 1;
  refs.counterSpanEl.textContent = counterValue;
}
