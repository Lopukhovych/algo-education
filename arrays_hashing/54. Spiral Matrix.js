/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let top = 0;
  let down = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let res = [];
  while (res.length < matrix.length * matrix[0].length) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= down; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if (top <= down) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[down][i]);
      }
    }
    down--;
    if (left <= right) {
      for (let i = down; i >= top; i--) {
        res.push(matrix[i][left]);
      }
    }
    left++;
  }
  return res;
};

const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

// tslint:disable-next-line:no-console
console.log('spiralOrder: ', spiralOrder(matrix)); // eslint-disable-line no-console
