function splitToArr(str) {
    let hasil = []
    let nama = ''
    if(str === undefined){
        return "Invalid input"
    } else if(str.length === 0){
        return "Data not available"
    } else{
        for(let i=0; i<str.length; i++){
            if(str[i] !== ';' && str[i] !== "-"){
                if(nama.length === 0){
                    nama += str[i].toUpperCase()
                } else{
                    nama += str[i]
                }
            } else{
                hasil.push(nama)
                nama = ''
            }
        }
        hasil.push(nama)
        return hasil
    }
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"))
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"))
console.log(splitToArr(""))
console.log(splitToArr())

module.exports = splitToArr