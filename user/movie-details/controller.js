import Model from "./model.js";

class Controller {
    constructor() {
        this.model = new Model()
    }

    getMovieDetails() {
        return this.model.getMovieDetails()
    }

    setMovieDetails() {

    }
}

export default Controller