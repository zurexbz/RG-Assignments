function countAndSum(number) {
  let result = 0;
  let num = 1;
    for(let i=0; i<number; i++){
        result += num;
        num++
        if(num > 3){
            num %= 3;
        }
    }
    return result;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
