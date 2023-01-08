class Model {
    constructor() {
        this.array=[]
    }

    async getRating() {
        const rating = await fetch("http://localhost:3000/rating")
        const result = await rating.json()

        return result
    }

    async setRating() {
        const res = await fetch("http://localhost:3000/rating", {
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