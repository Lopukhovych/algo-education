// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
var uniquePaths = function (m, n) {
  let matrix = new Array(m).fill(0).map(() => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }
  return matrix[m - 1][n - 1];
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//   const dp = Array(m).fill().map(() => Array(n).fill(-1));
//
//   function fill(i, j) {
//     if (i === m - 1 && j === n - 1) {
//       return 1;
//     }
//
//
//     if (i < 0 || j < 0 || i >= m || j >= n) {
//       return 0;
//     }
//
//     if (dp[i][j] !== -1) {
//       return dp[i][j];
//     }
//
//     let down = fill(i + 1, j);
//     let right = fill(i, j + 1);
//
//     return dp[i][j] = down + right;
//   }
//
//   return fill(0, 0)
// }

const m = 3, n = 7; // 28
// const m = 3, n = 2; // 3
// tslint:disable-next-line:no-console
console.log('uniquePaths: ', uniquePaths(m, n)); // eslint-disable-line no-console
