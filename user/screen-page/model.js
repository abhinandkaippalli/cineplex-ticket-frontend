class Model{
    constructor() {
        this.array = []
    }

    async getScreen() {
        const res = await fetch("http://localhost:3000/screen")
        const result = await res.json()

        return result
    }

    async setScreen() {
        const res = await fetch("http://localhost:3000/screen", {
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