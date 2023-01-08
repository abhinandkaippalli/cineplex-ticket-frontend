import Controller from "./controller.js";

const controller = new Controller()

controller.getRating().then((result) => {
    render(result)
}).catch ((err) => {
    console.log("Error" + err);
})

function render(rating) {
    console.log(rating);
}