
//Not using


import Controller from "./controller.js"
const controller = new Controller()

controller.loadTicketFromBackend().then((result) => {
    render(result)
})
    .catch((error) => {
        console.log(error);
    })

function render(ticketbooked) { //ticketbooked = result
    console.log(ticketbooked);
    //const rootDiv = document.getElementById('root')
    const nameRoot = document.getElementById('name')
    const emailRoot = document.getElementById('email')
    const numberRoot = document.getElementById('mob_number')
    nameRoot.innerHTML = ''
    emailRoot.innerHTML = ''
    numberRoot.innerHTML = ''
    //rootDiv.innerHTML=""
    for (let i = 0; i < ticketbooked.length; i++) {

        const nameP = document.createElement('p')
        nameP.classList.add('form-control')
        nameP.innerHTML = ticketbooked[i].name
        nameRoot.appendChild(nameP)

        const emailP = document.createElement('p')
        emailP.classList.add('form-control')
        emailP.innerHTML = ticketbooked[i].email
        emailRoot.appendChild(emailP)

        const mobP = document.createElement('p')
        mobP.classList.add('form-control')
        mobP.innerHTML = ticketbooked[i].phn_number
        numberRoot.appendChild(mobP)
    }
}




