const form = document.querySelector(".subscribe-form");
const btn = document.querySelector('.btn.subscribe-add');

console.log(form)
console.log(btn)

btn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('click')
  if (form.classList.contains("hidden")) {
    form.style.visibility = "visible";
    form.classList.remove("hidden");
    
  }
})

