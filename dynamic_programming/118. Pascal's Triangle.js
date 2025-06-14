/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    let prevRow = result[i - 1];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        row[j] = 1;
      } else {
        row[j] = prevRow[j - 1] + prevRow[j];
      }
    }
    result.push(row);
  }
  return result;
};

//Test

const numRows = 5; // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// tslint:disable-next-line:no-console
console.log('generate: ', generate(numRows)); // eslint-disable-line no-console
