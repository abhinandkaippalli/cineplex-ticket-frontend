import Model from "../../user/form-page/model.js"

class Controller {
    constructor() {
        this.model = new Model()
    }
    loadTicketFromBackend() {
        console.log("hi");
        return this.model.loadTicketFromBackend()
    }
}

export default Controller
