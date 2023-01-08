import Model from "./model.js";

class Controller {
    constructor() {
        this.model = new Model()
    }

    getScreening() {
        return this.model.getScreening()
    }

    setScreening() {

    }
}

export default Controller