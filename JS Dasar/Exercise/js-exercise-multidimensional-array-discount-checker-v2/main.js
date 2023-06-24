function discountChecker(costumers, date) {
    let hasil = []
    let arrDate = date.split("-")
    let hari = parseInt(arrDate[0])
    costumers.forEach(buyers => {
        let status = buyers[1]
        let arrPrice = buyers[0].split(" ")
        let price = parseInt(arrPrice[1])
        if(status === 'member'){
            hasil.push(buyers)
        } else if(status === 'non-member'){
            if(price % 2 === 0 && hari % 2 === 0){
                hasil.push(buyers)
            } else if(price % 2 !== 0 && hari % 2 !== 0){
                hasil.push(buyers)
            }
        }
    });
    return hasil
}

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
