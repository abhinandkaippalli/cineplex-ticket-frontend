import Model from "../../user/movie-details/model.js";

class Controller{
    constructor() {
        this.model = new Model()
    }

    getMovieDetails() {

    }

    setMovieDetails() {
        return this.model.setMovieDetails()
    }
}

export default Controller