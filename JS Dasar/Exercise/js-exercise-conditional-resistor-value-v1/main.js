function resistorValue(bandColor1, bandColor2, bandColor3, bandColor4) {
  let figure = '';
  let multiplier = 0;
  let tolerance = 0; 
  switch(bandColor1){
    case 'black':
      figure += '0';
      break;
    case 'brown':
      figure += '1';
      break;
    case 'red':
      figure += '2';
      break;
    case 'orange':
      figure += '3';
      break;
    case 'yellow':
      figure += '4';
      break;
    case 'green':
      figure += '5';
      break;
    case 'blue':
      figure += '6';
      break;
    case 'violet':
      figure += '7';
      break;
    case 'grey':
      figure += '8';
      break;
    case 'white':
      figure += '9';
      break;
  }

  switch(bandColor2){
    case 'black':
      figure += '0';
      break;
    case 'brown':
      figure += '1';
      break;
    case 'red':
      figure += '2';
      break;
    case 'orange':
      figure += '3';
      break;
    case 'yellow':
      figure += '4';
      break;
    case 'green':
      figure += '5';
      break;
    case 'blue':
      figure += '6';
      break;
    case 'violet':
      figure += '7';
      break;
    case 'grey':
      figure += '8';
      break;
    case 'white':
      figure += '9';
      break;
  }

  switch(bandColor3){
    case 'black':
      multiplier += 1;
      break;
    case 'brown':
      multiplier += 10;
      break;
    case 'red':
      multiplier += 100;
      break;
    case 'orange':
      multiplier += 1000;
      break;
    case 'yellow':
      multiplier += 10000;
      break;
    case 'green':
      multiplier += 100000;
      break;
    case 'blue':
      multiplier += 1000000;
      break;
    case 'violet':
      multiplier += 10000000;
      break;
    case 'gold':
      multiplier += 0.1;
      break;
    case 'silver':
      multiplier += 0.01;
      break;
  }

  switch(bandColor4){
    case 'black':
      tolerance += 20;
      break;
    case 'brown':
      tolerance += 1;
      break;
    case 'red':
      tolerance += 2;
      break;
    case 'gold':
      tolerance += 5;
      break;
    case 'silver':
      tolerance += 10;
      break;
  }

  const restistorValue = Number(figure) * multiplier;
  let returnString = '';
  returnString += restistorValue;
  returnString += ' ohm ±'+ tolerance + '%';

  return returnString;
}

console.log(resistorValue('brown', 'black', 'red', 'gold'));
console.log(resistorValue('red', 'red', 'red', 'gold'));
console.log(resistorValue('yellow', 'violet', 'green', 'silver'));
console.log(resistorValue('blue', 'grey', 'green', 'silver'));

module.exports = resistorValue;
