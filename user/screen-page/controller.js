import Model from "./model.js";

class Controller {
    constructor() {
        this.model = new Model()
    }

    async getScreen() {
        return this.model.getScreen()
    }
}

export default Controller