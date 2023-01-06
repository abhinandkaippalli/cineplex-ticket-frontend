import Model from "./model.js";

class Controller {
    constructor() {
        this.model = new Model();
    }
    getProfile() {
        return this.model.getProfile()
    }
    setProfile() {

    }
}

export default Controller