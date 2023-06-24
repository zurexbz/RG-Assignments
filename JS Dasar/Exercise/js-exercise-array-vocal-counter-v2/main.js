function vocalCounter(array) {
    let hurufVokal = "AIUEOaiueo"
    let findVokal = ""
    array.forEach(element => {
        for(let i=0; i<hurufVokal.length; i++){
            if(element === hurufVokal[i]){
                findVokal += hurufVokal[i]
            }
        }
    });
    if(findVokal.length === 0){
        return "Tidak ada huruf vokal yang ditemukan"
    } else if(findVokal.length > 0){
        return `Jumlah vokal yang ditemukan sebanyak ${findVokal.length} berupa ${findVokal}`
    }
}

console.log(vocalCounter(['x', 'A', 5, 'o', 1, 'T', 'b']));
console.log(vocalCounter([-10, 'E', 'e', 'z', 'p', 'i', 4]));
console.log(vocalCounter(['q', 'W', 'r', 't', 'Y']));

module.exports = vocalCounter
