/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  coins.sort((a, b) => a - b);
  if (amount < 1) return 0;
  
  let memo = {};
  
  function countMin(coinsNum, diff) {
    if (diff < 0) return Infinity;
    if (diff === 0) return 0;
    if (memo[diff] !== undefined) return memo[diff];
    
    let min = Infinity;
    for (let coin of coins) {
      if (diff < coin) continue;
      min = Math.min(min, countMin(coinsNum + 1, diff - coin) + 1);
    }
    memo[diff] = min;
    return min;
  }
  
  let result = countMin(0, amount);
  
  return result === Infinity ? -1 : result;
};

// var coinChange = function (coins, amount) {
//   let memo = new Array(amount + 1).fill(Infinity);
//   memo[0] = 0;
//
//   for(let i = 0; i<= amount; i++) {
//     for(let coin of coins) {
//       if(i - coin >= 0){
//         memo[i] = Math.min(memo[i], 1 + memo[i - coin]);
//       }
//     }
//   }
//   return memo[memo.length - 1] === Infinity ? -1 : memo[memo.length - 1];
// }

// Test

// const coins = [1, 2, 5], amount = 11; // 3
// const coins = [2], amount = 3
const coins = [186, 419, 83, 408], amount = 6249;
// tslint:disable-next-line:no-console
console.log('change: ', coinChange(coins, amount)); // eslint-disable-line no-console

