function trasureHunter(dailyLog) {
  let result = 0;
  for(let i=0; i<dailyLog.length; i++){
    if(dailyLog[i]==='$'){
      result = result + 100;
    } else if (dailyLog[i]==='x'){
      if(result>10){
        result=result - 10;
      } else{
        result=0;
      }
    } else{
      if(result !== 0){
        result = result - (result *50) / 100;
      }
    }
  }
  return result;
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
