/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let memo = new Array(n + 1).fill(0);
  return climb_Stairs(0, n, memo);
};

const climb_Stairs = (i, n, memo) => {
  if(i > n) return 0;
  
  if(i === n) return 1;
  
  if(memo[i] > 0) {
    return memo[i];
  }
  
  memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
  return memo[i];
}

// var climbStairs = function(n) {
//   let dp = new Array(n + 1).fill(1);
//
//   for(let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// };
// Test
const n = 2; //2
// const n = 3; //3
// tslint:disable-next-line:no-console
console.log('climbStairs: ', climbStairs(4)); // eslint-disable-line no-console
