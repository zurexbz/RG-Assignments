function quantityDiscount(quantity, price) {
  if(quantity <5){
    total = price * quantity;
    pajak = total * 1.11;
    return Math.floor(pajak * 100) / 100;
  } else if(quantity >= 5 && quantity <10){
    tmp = price * 0.85;
    total = tmp * quantity;
    pajak = total * 1.11;
    return Math.floor(pajak * 100) / 100;
  } else if(quantity >= 10){
    tmp = price * 0.80;
    total = tmp * quantity;
    pajak = total * 1.11;
    return Math.floor(pajak * 100) / 100;
  }
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
