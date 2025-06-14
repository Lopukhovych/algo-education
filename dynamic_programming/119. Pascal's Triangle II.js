/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function (rowIndex) {
//   function callRecursion(index) {
//     if (index === 0) return [1];
//
//     let prevRow = callRecursion(index - 1);
//     let row = [];
//
//     for (let i = 0; i < index + 1; i++) {
//       if (i === 0 || i === index) {
//         row.push(1);
//       } else {
//         row.push(prevRow[i - 1] + prevRow[i]);
//       }
//     }
//
//     return row;
//   }
//
//   return callRecursion(rowIndex);
// };

var getRow = function (rowIndex) {
  let result = [];

  for (let i = 0; i < rowIndex + 1; i++) {
    let row = [];
    let prevRow = result[i - 1];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(prevRow[j - 1] + prevRow[j]);
      }
    }
    result.push(row);
  }

  return result[rowIndex];
};

//Test
// const rowIndex = 3; // [1,3,3,1]
const rowIndex = 4; // [1,4,6,4,1]
// tslint:disable-next-line:no-console
console.log('getRow: ', getRow(4)); // eslint-disable-line no-console
