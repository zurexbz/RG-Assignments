function buyThemAll(books, budget) {
  let total = 0;
  let money = 0;
  let buyBooks = '';
  while(books.length && budget > 0){
    let judul = '';
    let price = '';
    let index = 0;
    for(let i=0; i<books.length; i++){
      if(books[i] !== ':' && books[i] !== ',' && price.length === 0){
        judul += books[i];
      } else if(books[i] === ':'){
        price += books[i + 1];
      } else if(books[i] === ','){
        index = i;
        break;
      } else if(price.length >= 1 && books[i] !== ':' && books[i] !== ',' && i != books.length - 1 && books[i+1] !== ','){
        price += books[i+1];
      } else{
        index = i;
      }
    }
    const priceNum = Number(price);
    if(budget>priceNum){
      budget -= priceNum;
      money += priceNum;
      buyBooks += judul + ', ';
      total++
    }
    books = books.slice(index+1);
  }
  let result = '';
  if(total>0){
    result = 'Afista membeli '+total+' buku yaitu ' + buyBooks.slice(0, -2) + '. Total belanja ' + money + ', sisa uang Afista adalah ' + budget + '.';
  } else{
    result = 'Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ' + budget + '.';
  }
  return result;
}

// console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
    200000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
