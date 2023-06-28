const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (!email.value.length || !password.value.length) {
    return alert("ALL FIELDS MUST BE COMPLETED");
  }

  const formFieldsNames = Object.keys(evt.currentTarget.elements);
  const formSubmitObject = formFieldsNames.reduce((acc, item) => {
    if (isNaN(item)) {
      acc[item] = evt.currentTarget.elements[item].value;
    }
    return acc;
  }, {});
  console.log(formSubmitObject);

  evt.currentTarget.reset();
}
