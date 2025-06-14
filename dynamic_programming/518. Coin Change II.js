/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let memo = new Array(coins.length).fill(0).map(item => new Array(amount + 1).fill(-1));
  
  function numberOfWays(i, diff) {
    if (diff === 0) {
      return 1;
    }
    
    if (i === coins.length) {
      return 0;
    }
    
    if (memo[i][diff] !== -1) {
      return memo[i][diff];
    }
    
    if (coins[i] > diff) {
      return memo[i][diff] = numberOfWays(i + 1, diff);
    }
    
    memo[i][diff] = numberOfWays(i, diff - coins[i]) + numberOfWays(i + 1, diff);
    return memo[i][diff];
  }
  
  return numberOfWays(0, amount)
};


// tslint:disable-next-line:no-console
console.log('change: ', change(3, [1, 2, 5])); // eslint-disable-line no-console
