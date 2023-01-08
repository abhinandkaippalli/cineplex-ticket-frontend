import Model from "./model.js";

class Controller {
    constructor() {
        this.model = new Model()
    }

    getRating() {
        return this.model.getRating()
    }

    setRating() {
        
    }
}

export default Controller