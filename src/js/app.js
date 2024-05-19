const addBtn = document.querySelector(".subscribe-add");
const formContainer = document.querySelector(".form-container");
const formContainerChange = document.querySelector(".form-container-change")
const form = formContainer.querySelector(".subscribe-form");
const formСhange = formContainerChange.querySelector(".subscribe-form-change");
const fieldShortDescription = formContainerChange.querySelector(".field-short-description")
const fieldDetailedDescription = formContainerChange.querySelector(".field-detailed-description")
const cancelBtnChange = formContainerChange.querySelector(".subscribe-cancel")
const okBtnChange = formContainerChange.querySelector(".subscribe-ok")
const cancelBtn = form.querySelector(".subscribe-cancel");
const okBtn = form.querySelector(".subscribe-ok");
const ticketsBlock = document.querySelector(".tickets-block");
const xhr = new XMLHttpRequest();
const formContainerDelete = document.querySelector(".form-container-delete")
const deleteForm = document.querySelector(".subscribe-form-delete")
const cancelBtnDelete = deleteForm.querySelector(".subscribe-cancel")
const okBtnDlete = deleteForm.querySelector(".subscribe-ok")

let shortDescription
let detailedDescription
let tickets
let uuid
let state


window.onload = function() {
  fetchTickets(); // Загружаем данные при загрузке страницы

};

async function fetchTickets() {
  try {
    const response = await fetch('http://localhost:7070/tickets');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const ticketsData = await response.json();
    console.log('Received tickets:', ticketsData);
    
    ticketsData.forEach((ticket) => {
      let div = document.createElement('div');
      div.classList.add('ticket-block');
      div.setAttribute("uuid", ticket.id);
      console.log(ticket)
      /*div.dataset.uuid = ticket.id;*/
      div.innerHTML = `
      <div class="short-part">
          <input name="state" class="state" type="checkbox">
          <span class="short-description-ticket">
            <span class="short-description"></span>
            <span class="date"> 12.04.2024 15:26</span>
          </span>
          <button class="delete ticket-btn"></button>
          <button class="change ticket-btn"></button>
      </div>
      <div class="full-part">
        <span class="full-description"></span>
      </div>`
      div.childNodes[1].childNodes[3].childNodes[1].textContent = ticket.name
      div.childNodes[3].childNodes[1].textContent = ticket.description
      div.childNodes[1].childNodes[1].checked = ticket.state
      console.log(div.childNodes[1].childNodes[1])
      ticketsBlock.appendChild(div)

    })

    const ticketBlock = document.querySelectorAll(".ticket-block");

    ticketBlock.forEach((ticket) => {
      ticket.addEventListener("click", (event) => {

        if (event.target.classList.contains("short-part")) {
          ticket.childNodes[3].classList.toggle("visible");
        }

        if (event.target.classList.contains("change")) {
          formContainerChange.style.visibility = "visible";
          formContainerChange.classList.remove("hidden");
          uuid = event.target.parentNode.parentNode.getAttribute("uuid")
          
          fieldShortDescription.value = event.target.parentNode.childNodes[3].childNodes[1].textContent
          fieldDetailedDescription.value = event.target.parentNode.parentNode.childNodes[3].childNodes[1].textContent

        }


        cancelBtnChange.addEventListener("click", (event) => {

          if (!formContainerChange.classList.contains("hidden")) {
            formContainerChange.style.visibility = "hidden";
            formContainerChange.classList.add("hidden");
          }
        })

        cancelBtnDelete.addEventListener("click", (event) => {

          if (!formContainerDelete.classList.contains("hidden")) {
            formContainerDelete.style.visibility = "hidden";
            formContainerDelete.classList.add("hidden");
          }
        })
        
        okBtnChange.addEventListener("click", (event) => {
          if (!formContainerChange.classList.contains("hidden") && formContainerChange.childNodes[1].childNodes[5].textContent && formContainerChange.childNodes[1].childNodes[9].textContent) {
            formContainerChange.style.visibility = "hidden";
            formContainerChange.classList.add("hidden");
            
          }
        })

        okBtnDlete.addEventListener("click", (event) => {
          if (!formContainerDelete.classList.contains("hidden")) {
            formContainerDelete.style.visibility = "hidden";
            formContainerDelete.classList.add("hidden");
          
          }
        })

        if (event.target.classList.contains("delete")) {
          formContainerDelete.style.visibility = "visible";
          formContainerDelete.classList.remove("hidden");
          uuid = event.target.parentNode.parentNode.getAttribute("uuid")
        }
      })
    })
  

    return ticketsData;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error; // Перебрасываем ошибку дальше, если нужно
  }
}


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const body = new FormData(form);

  body.append("state", "")

  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    
    /*console.log(xht.responseText);*/
  }
  
  xhr.open('POST', 'http://localhost:7070');
  
  xhr.send(body);

  form.reset()
  location.reload();
})


formСhange.addEventListener("submit", (event) => {
  event.preventDefault();

  const body = new FormData(formСhange);

  body.append("uuid", uuid)

  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    
  }

  xhr.open('PUT', 'http://localhost:7070');
  
  xhr.send(body);

  formСhange.reset()
  location.reload();
})


deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    
  }

  xhr.open('DELETE', `http://localhost:7070?uuid=${uuid}`);
  
  xhr.send();
  deleteForm.reset()

  location.reload();

})

okBtn.addEventListener("click", (event) => {
  if (!formContainer.classList.contains("hidden")) {
    formContainer.style.visibility = "hidden";
    formContainer.classList.add("hidden");
  
  }
})

okBtnChange.addEventListener("click", (event) => {
  if (!formContainerChange.classList.contains("hidden")) {
    formContainerChange.style.visibility = "hidden";
    formContainerChange.classList.add("hidden");
  
  }
})

addBtn.addEventListener('click', (event) => {
  
  if (formContainer.classList.contains("hidden")) {
    formContainer.style.visibility = "visible";
    formContainer.classList.remove("hidden");
  }
})


cancelBtn.addEventListener("click", (event) => {

  if (!formContainer.classList.contains("hidden")) {
    formContainer.style.visibility = "hidden";
    formContainer.classList.add("hidden");
  }

  if (!formContainerChange.classList.contains("hidden")) {
    formContainerChange.style.visibility = "hidden";
    formContainerChange.classList.add("hidden");
  }

  if (!formContainerDelete.classList.contains("hidden")) {
    formContainer.style.visibility = "hidden";
    formContainer.classList.add("hidden");
  }
})





