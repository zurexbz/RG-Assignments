function mineralMining(mineral, miningPower, duration, cost) {
  switch(mineral){
    case 'gold':
      time = 30;
      market = 1;
      break;
    case 'silver':
      time = 20;
      market = 0.6;
      break;
    case 'coper':
      time = 5;
      market = 0.3;
      break;
    case 'uranium':
      time = 75;
      market = 3;
      break;
    case 'gold':
      time = 30;
      market = 1;
      break;
    case 'platinum':
      time = 15;
      market = 2;
      break;
    case 'titanium':
      time = 55;
      market = 1.5;
      break;
    default:
      return `Invalid mineral name`;
  }

  miningProfit = (duration/time) * miningPower;
  total = miningProfit * market;

  if (cost < total){
    return `Mineral mining profit ${total - cost}`;
  } else if (cost > total){
    return `Mineral mining at a loss ${total - cost}`;
  } else{
    return `Mineral mining get nothing`;
  }
}

console.log(mineralMining('gold', 10, 70, 59)); // Mineral mining at a loss -35.666666666666664
console.log(mineralMining('rock', 10, 70, 40)); // Invalid mineral name
console.log(mineralMining('uranium', 10, 70, 150)); // Mineral mining at a loss -122
console.log(mineralMining('silver', 33, 200, 30)); // Mineral mining profit 168
console.log(mineralMining('titanium', 25, 100, 200)); // Mineral mining at a loss -131.8181818181818
console.log(mineralMining('gold', 1, 100, 15)); // Mineral mining at a loss -11.666666666666666
console.log(mineralMining('titanium', 20, 350, 150)); // Mineral mining at a loss 40.90909090909091

module.exports = mineralMining;
