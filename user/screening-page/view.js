import Controller from "./controller.js";

const controller = new Controller()

controller.getScreening().then((result) => {
    render(result)
}).catch((err) => {
    console.log("Error" + err);
})

function render(screening) {
    console.log(screening);
}