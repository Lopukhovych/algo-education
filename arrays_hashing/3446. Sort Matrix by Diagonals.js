// /**
//  * @param {number[][]} grid
//  * @return {number[][]}
//  */
// var sortMatrix = function (grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;
//   const diags = {};
//
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       let key = i - j;
//       if (!diags[key]) diags[key] = [];
//       diags[key].push(grid[i][j]);
//     }
//   }
//
//   for (let key in diags) {
//     if (key < 0) {
//       diags[key].sort((a, b) => a - b);
//     } else {
//       diags[key].sort((a, b) => b - a);
//     }
//   }
//
//   const idx = {};
//   for (const key in diags) idx[key] = 0;
//
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       let key = i - j;
//       grid[i][j] = diags[key][idx[key]++];
//     }
//   }
//
//   return grid;
// };

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function (grid) {
  let n = grid.length;
  for (let i = 0; i < n; i++) {
    let tmp = [];
    for (let j = 0; i + j < n; j++) {
      tmp.push(grid[i + j][j]);
    }
    tmp.sort((a, b) => b - a);
    for (let j = 0; i + j < n; j++) {
      grid[i + j][j] = tmp[j];
    }
  }
  
  for (let j = 1; j < n; j++) {
    let tmp = [];
    for (let i = 0; j + i < n; i++) {
      tmp.push(grid[i][i + j]);
    }
    tmp.sort((a, b) => a - b);
    for (let i = 0; j + i < n; i++) {
      grid[i][i + j] = tmp[i];
    }
  }
  
  return grid;
}

const grid = [[1, 7, 3], [9, 8, 2], [4, 5, 6]]; // [[8,2,3],[9,6,7],[4,5,1]]
// tslint:disable-next-line:no-console
console.log('sortMatrix: ', sortMatrix(grid)); // eslint-disable-line no-console
