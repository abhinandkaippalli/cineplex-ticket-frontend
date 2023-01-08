import Controller from "./controller.js";

const controller = new Controller()

controller.getScreen().then((result) => {
    render(result)
}).catch((err) => {
    console.log("Error" + err);
})

function render(screen) {
    console.log(screen);
}