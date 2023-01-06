import Controller from "./controller.js";
const controller = new Controller()

controller.getProfile().then((profile) => {
    render(profile)
}).catch ((err) => {
    console.log(err);
})

function render(result) {
    console.log(result)
}
