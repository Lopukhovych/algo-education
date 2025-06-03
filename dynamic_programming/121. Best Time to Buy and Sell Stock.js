/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowestValue = prices[0];
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowestValue) {
      lowestValue = prices[i];
    } else if (prices[i] > lowestValue) {
      maxProfit = Math.max(maxProfit, prices[i] - lowestValue);
    }
  }
  
  return maxProfit;
};

// test
// const prices = [7, 1, 5, 3, 6, 4]; // 5
const prices = [7,6,4,3,1]; // 0
// tslint:disable-next-line:no-console
console.log('maxProfit: ', maxProfit(prices)); // eslint-disable-line no-console
