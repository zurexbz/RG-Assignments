function addNumber(numStr, options){
    let hasil = ''
    if(options === "left"){
        for(let i=0; i<numStr.length - 1; i++){
            hasil += parseInt(numStr[i])+parseInt(numStr[i+1])
        }
    } else if(options === "right"){
        for(let i = numStr.length - 1; i>0; i--){
            hasil += parseInt(numStr[i])+parseInt(numStr[i-1])
        }
    }
    return hasil
}

module.exports = addNumber;
