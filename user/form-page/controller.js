import Model from "./model.js"; 
class Controller {
    constructor() {
        this.model = new Model();
    }
    getArray() {
        return this.model.getArray();
    }
    setArray(name, email, phone_number) {
        const selectedSeatsFromLocalStorage = JSON.parse(localStorage.getItem("selectedSeats"));
        const data = {
            name: name,
            email: email,
            phn_number: phone_number,
            seatsSelected: selectedSeatsFromLocalStorage
        }
        this.model.setArray(data)
    }
}

export default Controller