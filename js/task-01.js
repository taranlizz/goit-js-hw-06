const categoriesListEls = document.querySelectorAll(".item");

console.log("Number of categories:", categoriesListEls.length);

categoriesListEls.forEach((el) => {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
});
