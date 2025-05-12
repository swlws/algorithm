/**
 * 股票的最大利润
 *    只能交易一次
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = -Infinity
  let minPrice = Infinity
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
  }
  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
