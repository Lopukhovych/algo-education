/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  if(!rows) return false;
  let cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;
  
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let elem = matrix[Math.floor(middle / cols)][middle % cols];
    
    if (elem === target) return true;
    if (target < elem) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  
  return false;
};

// Test
// const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3; // true
const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13; //false
// const matrix = [[1,1]], target = 2 // false
// const matrix = [[1,3]], target = 3 // true

// tslint:disable-next-line:no-console
console.log('searchMatrix: ', searchMatrix(matrix, target)); // eslint-disable-line no-console
