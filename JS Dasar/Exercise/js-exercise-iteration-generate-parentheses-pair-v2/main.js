function generateParenthesesPair(numberOfPairs) {
  let openKurung = '';
  let tutupKurung = '';
  for(let i=0; i<numberOfPairs; i++){
    openKurung += '(';
    tutupKurung += ')';
  }
  result = '';
  result = openKurung + tutupKurung;
  return result
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
