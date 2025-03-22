/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const rows = new Set();
  const colums = new Set();
  for(let i = 0; i< matrix.length; i++) {
    for(let j = 0; j< matrix[0].length; j++) {
      if(matrix[i][j] === 0) {
        rows.add(i)
        colums.add(j);
      }
    }
  }
  
  for(let i = 0; i< matrix.length; i++) {
    for(let j = 0; j< matrix[0].length; j++) {
      if(rows.has(i) || colums.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

// Test
const matrix = [[1,1,1],[1,0,1],[1,1,1]]; //[[1,0,1],[0,0,0],[1,0,1]]
// const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]; //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// tslint:disable-next-line:no-console
console.log('setZeroes: ', setZeroes(matrix)); // eslint-disable-line no-console

