const addBtn = document.querySelector(".subscribe-add");
const formContainer = document.querySelector(".form-container");
const form = formContainer.querySelector(".subscribe-form");
const cancelBtn = form.querySelector(".subscribe-cancel");
const okBtn = form.querySelector(".subscribe-ok");
const ticketBlock = document.querySelectorAll(".ticket-block");
const xhr = new XMLHttpRequest();

let tickets

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

    // Присваивание полученных данных глобальной переменной или используйте их напрямую
    // Например, если у вас есть переменная tickets, вы можете сделать:
    
    ticketBlock.forEach(block => {
      ticketsData.forEach((ticket) => {
        console.log(block.uuid)
        if (block.uuid !== ticket.id) {
          block.uuid = ticket.id
          block.childNodes[1].childNodes[3].childNodes[1].textContent = ticket.name
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

  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    
    /*console.log(xht.responseText);*/
  }
  
  xhr.open('POST', 'http://localhost:7070');
  
  xhr.send(body);

  form.reset()

})

okBtn.addEventListener("click", (event) => {
  if (!formContainer.classList.contains("hidden")) {
    formContainer.style.visibility = "hidden";
    formContainer.classList.add("hidden");
  
  }
})


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

ticketBlock.forEach((ticket) => {
  ticket.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") {
      ticket.childNodes[3].classList.toggle("visible");
    }
  })
  /*console.log(ticket.id = 555)
  console.log(tickets)
  console.log(ticket.childNodes[1].childNodes[3].childNodes[1].textContent)
  tickets.forEach((record) => {
    console.log(record)
    if (ticket.id !== record.id) {
      ticket.id = record.id
      ticket.childNodes[1].childNodes[3].childNodes[1].textContent = record.name
    }
  })*/
})



