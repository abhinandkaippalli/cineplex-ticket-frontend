//import axios from 'axios';
class Model {
    constructor() {
        this.array = []
    }
    getArray() {
        return this.array
    }

    async loadTicketFromBackend() {
        const res =await fetch("http://localhost:3000/booking")
        const result = await res.json()
        console.log(result)

        return result;
    }

    async setArray(data) {
        console.log("HI");
        //const res = await axios.post("http://localhost:3000/booking",data)
        const res = await fetch("http://localhost:3000/booking", {
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