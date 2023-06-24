function deretanAngkaHinggaN(n) {
  let result = '';
  let count = n - 1;
  let looping = n - 2;
  if(n < 2){
    return `Incorrect param`;
  } else{
    while(true){
      result += count;
      if(count === 1){
        count = looping;
        looping--;
        if(looping === 0){
          break;
        }
        count += 1;
      }
      count--;
    }
    return result + '1';
  }
}

console.log(deretanAngkaHinggaN(6));

module.exports = deretanAngkaHinggaN;
