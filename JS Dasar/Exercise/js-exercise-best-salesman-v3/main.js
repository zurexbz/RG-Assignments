function rekapSalesByName(data, name) {
  // TODO: answer here
}

function salesReport(data, correction) {
  if (correction) {
      correction.forEach(correctionItem => {
          if(correctionItem.type === "tambah"){
              data.push(correctionItem)
          }
          else if(correctionItem.type === "koreksi"){
              data.forEach(dataItem => {
                  if(dataItem.salesName === correctionItem.salesName && dataItem.salesDate === correctionItem.salesDate){
                      dataItem.totalSales = correctionItem.totalSales
                  }
              });
          }
      });
  }

  const result = {
      monthlySales: 0,
      totalSalesByName: { Adi: 0, Budi: 0, Poltak: 0, Sri: 0, Udin: 0 },
      bestSalesman: ""
  }
  
  data.forEach(sales => {
      result.monthlySales += sales.totalSales;
      result.totalSalesByName[sales.salesName] += sales.totalSales
  });

  let bestSalesArray = Object.values(result.totalSalesByName).sort()
  let bestSales = bestSalesArray[bestSalesArray.length - 1] 

  let bestSalesman = ""
  for (let salesman in result.totalSalesByName) {
      if (result.totalSalesByName[salesman] === bestSales) {
        bestSalesman = salesman
      }
  }

  result.bestSalesman = `Penjualan terbanyak dilakukan oleh ${bestSalesman} dengan total penjualan dalam 1 bulan sebesar ${bestSales}`

  return result
}

module.exports = {
  salesReport,
}
