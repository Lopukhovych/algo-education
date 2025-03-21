/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  if (!intervals.length) return true;
  
  intervals.sort((i1, i2) => i1[0] - i2[0]);
  
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false;
    }
  }
  
  return true;
};

// Test
// const intervals = [[0,30],[5,10],[15,20]] // false
const intervals = [[7, 10], [2, 4]] // true

// tslint:disable-next-line:no-console
console.log('canAttendMeetings: ', canAttendMeetings(intervals)); // eslint-disable-line no-console

