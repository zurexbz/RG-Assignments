function minMax(str){
    let max = parseInt(str[0]);
    let min = parseInt(str[0]);

    for(let i=0; i<str.length; i++){
        let value = parseInt(str[i]);
        if(value > max){
            max = value;
        }
        if(value < min){
            min = value;
        }
    }
    if(min === max){
        return`Nilai terkecil dan terbesar adalah ${max}`;
    } else{
        return`Nilai terkecil adalah ${min}, dan terbesar adalah ${max}`;
    }
}

module.exports = minMax;