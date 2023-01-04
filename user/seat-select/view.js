import Controller from "../seat-select/controller.js";

const controller = new Controller();

function render() {
    const seats = controller.getSeats();
    console.log(seats);
    const rootDiv = document.getElementById('root')
    rootDiv.innerHTML = '';

    for (let i = 0; i < seats.length; i++) {
        const newSeat = document.createElement('div')
        newSeat.classList.add('seat')
        newSeat.dataset.seatNumber = i;

        if (seats[i] === 'selected') {
            newSeat.classList.add('selected')
        }
        if (seats[i] === 'booked') {
            newSeat.classList.add('booked')
        }

        else {
            newSeat.addEventListener('click', (event) => {
                newSeat.classList.add('selected')
                controller.setSeats(i)
            })
        }

        newSeat.addEventListener('click', (event) => {
            if (seats[i] === 'available') {
                newSeat.classList.remove('selected')
            }
        })

        const button = document.getElementById('book-btn')
        button.addEventListener('click', (e) => {
            e.preventDefault()
            controller.bookSeats();
            window.location.href = "../form-page/form-page.html";
        })

        rootDiv.appendChild(newSeat)
    }
}
render();