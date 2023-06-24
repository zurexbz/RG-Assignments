function printNumber(totalNumber) {
    let result = '';
    let num = 1;
    for(let i=0; i<totalNumber; i++){
        result += num;
        num++
        if(num > 3){
            num %= 3;
        }
    }
    return result;
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber
