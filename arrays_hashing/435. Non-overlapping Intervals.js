/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let ans = 0;
  let k = -Infinity;
  for (let [x, y] of intervals) {
    if (x >= k) {
      k = y
    } else {
      ans++
    }
  }
  
  return ans;
};

// var eraseOverlapIntervals = function (intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);
//   let prev = 0, curr = 1;
//   let ans = 0;
//
//   while (curr < intervals.length) {
//     if (intervals[prev][1] > intervals[curr][0]) {
//       ans++;
//       if (intervals[curr][1] < intervals[prev][1]) {
//         prev = curr;
//       }
//     } else {
//       prev = curr;
//     }
//     curr++;
//   }
//
//   return ans;
// };

//Test
// const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]; // 1
const intervals = [[1, 2], [1, 2], [1, 2]]; // 2
// const intervals = [[1,2],[2,3]] // 0
// tslint:disable-next-line:no-console
console.log('eraseOverlapIntervals: ', eraseOverlapIntervals(intervals)); // eslint-disable-line no-console
