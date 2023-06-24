function zodiacSign(day, month) {
  if(month === "Desember"){
    if(day > 0 && day <= 21){
      return `Sagittarius`
    } else if(day > 21 && day <=31){
      return `Capricorn`
    } else {
      return `Input tanggal salah`
    }
  } else if(month === "Januari"){
    if(day > 0 && day <= 19){
      return `Capricorn`
    } else if(day > 19 && day <=31){
      return `Aquarius`
    } else {
      return `Input tanggal salah`
    }
  } else if(month === "Februari"){
    if(day > 0 && day <= 18){
      return `Aquarius`
    } else if(day > 18 && day <=29){
      return `Pisces`
    } else {
      return `Input tanggal salah`
    }
  } else if(month === "Maret"){
    if(day > 0 && day <= 20){
      return `Pisces`
    } else if(day > 20 && day <=31){
      return `Aries`
    } else {
      return `Input tanggal salah`
    }
  } else if(month === "April"){
    if(day > 0 && day <= 19){
      return `Aries`
    } else if(day > 19 && day <=30){
      return `Taurus`
    } else {
      return `Input tanggal salah`
    }
  } else if(month === "Mei"){
    if(day > 0 && day <= 20){
      return `Taurus`
    } else if(day > 20 && day <=31){
      return `Gemini`
    } else {
      return `Input tanggal salah`
    }
  } else if(month === "Juni"){
    if(day > 0 && day <= 20){
      return `Gemini`
    } else if(day > 20 && day <=30){
      return `Cancer`
    } else {
      return `Input tanggal salah`
    }
  } else if(month === "Juli"){
    if(day > 0 && day <= 22){
      return `Cancer`
    } else if(day > 22 && day <=31){
      return `Leo`
    }
  } else if(month === "Agustus"){
    if(day > 0 && day <= 22){
      return `Leo`
    } else if(day > 22 && day <=31){
      return `Virgo`
    } else {
      return `Input tanggal salah`
    }
  } else if(month === "September"){
    if(day > 0 && day <= 22){
      return `Virgo`
    } else if(day > 22 && day <=30){
      return `Libra`
    } else {
      return `Input tanggal salah`
    }
  } else if(month === "Oktober"){
    if(day > 0 && day <= 22){
      return `Libra`
    } else if(day > 22 && day <=31){
      return `Scorpio`
    } else {
      return `Input tanggal salah`
    }
  } else if(month === "November"){
    if(day > 0 && day <= 21){
      return `Scorpio`
    } else if(day > 21 && day <=30){
      return `Sagittarius`
    } else {
      return `Input tanggal salah`
    }
  } else{
    return `Nama bulan salah`
  }
}

console.log(zodiacSign(30, 'Desember'));
console.log(zodiacSign(31, 'Desember'));
console.log(zodiacSign(41, 'Desember'));
console.log(zodiacSign(31, 'Februari'));
console.log(zodiacSign(29, 'Februari'));
console.log(zodiacSign(29, 'Januari'));


module.exports = zodiacSign;
