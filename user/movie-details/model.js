class Model {
    constructor() {
        this.movie = []
    }

    async getMovieDetails() {
        const movies = await fetch("http://localhost:3000/movie")
        const movieDetails = await movies.json()

        return movieDetails
    }

    async setMovieDetails() {

    }

}

export default Model