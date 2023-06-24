function travelDiscount(id, amount) {
    let status = '';
    let price = 0;
    let discount = 0;
  
    // Check the voucher status based on the id
    if (id.includes('STD')) {
      status = 'STUDENT';
      price = 20000;
      if (amount > 20) {
        discount = 0.2;
      }
    } else if (id.includes('CORP')) {
      status = 'CORPORATE';
      price = 50000;
      if (amount > 30) {
        discount = 0.25;
      }
    } else {
      return 'Maaf, voucher yang anda miliki tidak valid!';
    }
  
    // Calculate the total price after discount
    let totalPrice = price * amount * (1 - discount);
  
    // Format the output message
    let output = `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalPrice}.`;
  
    return output;
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount
