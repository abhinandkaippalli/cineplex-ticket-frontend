import Controller from "./controller.js";
const controller = new Controller()

controller.loadTicketFromBackend().then((result) => {
    render(result)
}).catch((error) => {
    console.log(error);
})

function render(ticketBooked) {
    const tBody = document.getElementById('tBody')
    tBody.innerHTML = ''
    for (let i = 0; i < ticketBooked.length; i++) {
        const tr = document.createElement('tr')
        tr.setAttribute("id", "tableRow");
        const thIndex = document.createElement('th')
        const tdName = document.createElement('td')
        const tdEmail = document.createElement('td')
        const tdNumber = document.createElement('td')
        const tdSeats = document.createElement('td')
        thIndex.innerHTML = i + 1
        tdName.innerHTML = ticketBooked[i].name
        tdEmail.innerHTML = ticketBooked[i].email
        tdNumber.innerHTML = ticketBooked[i].phn_number
        tdSeats.innerHTML = ticketBooked[i].seatsSelected
        tr.appendChild(thIndex)
        tr.appendChild(tdName)
        tr.appendChild(tdEmail)
        tr.appendChild(tdNumber)
        tr.appendChild(tdSeats)
        tBody.appendChild(tr)
    }
}