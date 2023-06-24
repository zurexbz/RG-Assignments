function travelSeat(passengers, seatColumn) {
    let hasil = []
    let seat = []

    if(seatColumn < 1){
        return `Invalid number`
    } else if(passengers.length === 0){
        return `Oops! tickets not sold!`
    }

    passengers.sort()
    passengers.forEach(pass => {
        seat.push(pass)
        if(seat.length == seatColumn){
            hasil.push(seat)
            seat = []
        }
    });
    let avilableSeat = seatColumn - seat.length

    if(seat.length<seatColumn && seat.length>0){
        for(let i=0; i<avilableSeat; i++){
            seat.push("Seat available")
        }
        hasil.push(seat)
        seat = []
    }
    return hasil
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat