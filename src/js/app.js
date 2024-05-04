const addBtn = document.querySelector(".subscribe-add");
const formContainer = document.querySelector(".form-container");
const form = formContainer.querySelector(".subscribe-form");
const cancelBtn = form.querySelector(".subscribe-cancel");
const okBtn = form.querySelector(".subscribe-ok");

addBtn.addEventListener('click', (event) => {
  /*event.preventDefault();*/
  
  if (formContainer.classList.contains("hidden")) {
    formContainer.style.visibility = "visible";
    formContainer.classList.remove("hidden");
  }
})

/*form.addEventListener("submit", (event) => {
  event.preventDefault();

})*/

cancelBtn.addEventListener("click", (event) => {
  /*event.preventDefault();*/

  if (!formContainer.classList.contains("hidden")) {
    formContainer.style.visibility = "hidden";
    formContainer.classList.add("hidden");
  }
})


