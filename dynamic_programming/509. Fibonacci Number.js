/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
};
// var fib = function (n) {
//   function getNum(num) {
//     if (num === 0) return 0;
//     if (num === 1) return 1;
//
//     return getNum(num - 1) + getNum(num - 2);
//   }
//
//   return getNum(n);
// };

//Test
// tslint:disable-next-line:no-console
console.log('fib: ', fib(3)); // eslint-disable-line no-console
