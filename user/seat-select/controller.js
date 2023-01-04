import Model from "../seat-select/model.js"

class Controller {
    constructor() {
        this.model = new Model();
    }

    getSeats() {
        return this.model.getSeats();
    }

    setSeats(seats) {
        this.model.setSeats(seats)
    }
    
    bookSeats() {
        this.model.bookSeats()
    }
}
export default Controller;