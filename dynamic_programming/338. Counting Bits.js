/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = new Array(n + 1).fill(0);
  let offset = 1
  
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    dp[i] = 1 + dp[i - offset];
  }
  return dp;
};

const n = 2; // [0,1,1]
// const n = 5; // [0,1,1,2,1,2]

// tslint:disable-next-line:no-console
console.log('countBits: ', countBits(3)); // eslint-disable-line no-console

