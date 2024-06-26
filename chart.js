export function createChart(stockChartsData, stockStatsData, stockSummary, brand, time) {
  //currentStock=brand
  const timeArr = stockChartsData.stocksData[0][`${brand}`][`${time}`].timeStamp
  const valArr = stockChartsData.stocksData[0][`${brand}`][`${time}`].value
  const dataArr = [];
  let minVal = valArr[0].toFixed(2), maxVal = minVal;
  for (let i = 0; i < timeArr.length; i++) {
    const newArr = [timeArr[i] * 1000, valArr[i].toFixed(2)]
    minVal = Math.min(minVal, newArr[1])
    maxVal = Math.max(maxVal, newArr[1])
    dataArr.push(newArr);
  }
  document.getElementById('stockName').textContent = brand
  document.getElementById('book_Value').textContent = `$${stockStatsData.stocksStatsData[0][`${brand}`].bookValue}`
  document.getElementById('profit').textContent = `${stockStatsData.stocksStatsData[0][`${brand}`].profit}%`
  if (stockStatsData.stocksStatsData[0][`${brand}`].profit > 0) document.getElementById('profit').style.color = '#7BC74D'
  else document.getElementById('profit').style.color = 'red'
  document.getElementById('stockSummary').textContent = stockSummary.stocksProfileData[0][`${brand}`].summary
  document.getElementById('stockMin').textContent = `Low value in the selected period of time= $${minVal}`
  document.getElementById('stockMax').textContent = `Peak value in the selected period of time= $${maxVal}`
  return dataArr
}