class Model {
    constructor () {
        this.profile = []
    }
    async getProfile() {
        const res = await fetch("http://localhost:3000/user")
        const profile = await res.json()
        console.log(profile);
        return(profile)
    }
    async setProfile() {
        const res = await fetch("http://localhost:3000/user", {
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