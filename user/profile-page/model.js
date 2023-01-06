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
    setProfile() {

    }
}

export default Model