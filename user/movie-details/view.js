import Controller from "./controller.js"

const controller = new Controller()

controller.getMovieDetails().then((result) => {
    render(result)
}).catch((err) => {
    console.log(err);
})

function render(movieDetails) {
    console.log(movieDetails);
}