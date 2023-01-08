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
        const res = await fetch("http://localhost:3000/movie", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            const result = await res.json()
            console.log(result);
        return result;
    }

}

export default Model