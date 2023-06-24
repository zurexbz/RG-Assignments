function correctCapitalization(paragraph){
    let hasil = '';

    for(let i=0; i<paragraph.length; i++){
        if(i === 0){
            hasil += paragraph[i].toUpperCase();
        } else if(paragraph[i - 2] === "."){
            hasil += paragraph[i].toUpperCase();
        } else{
            hasil += paragraph[i];
        }
    }
    return hasil;
}

module.exports = correctCapitalization