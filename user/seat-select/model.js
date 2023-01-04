class Model {
    constructor() {
        this.seats=["available", "selected", "available", "booked", "available", "booked", "available",
        "available", "selected", "available", "selected", "available", "available", "available"];
    }
    getSeats() {
        return this.seats
    }
    setSeats(seatNumber) {
        if (this.seats[seatNumber] === "available") {
            this.seats[seatNumber] = "selected"
        } else if(this.seats[seatNumber] === "selected") {
            this.seats[seatNumber] = "available"
            console.log(this.seats);
        }
        //console.log(this.seats);
    }
    bookSeats() {
        let selectedSeats = [] 
        for(let n=0; n<this.seats.length;n++){
            if(this.seats[n]==='selected'){
                selectedSeats.push(n);
            }
        }
        localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats))
    }
}
export default Model