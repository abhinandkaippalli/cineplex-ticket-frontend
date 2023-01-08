class Model {
    constructor() {
        this.array = []
    }

    async getScreening() {
        const res = await fetch("http://localhost:3000/screening")
        const screening = await res.json()

        return(screening)
    } 

    async setScreening() {
        const res = await fetch("http://localhost:3000/screening", {
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