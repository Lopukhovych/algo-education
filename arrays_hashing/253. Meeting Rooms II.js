// /**
//  * @param {number[][]} intervals
//  * @return {number}
//  */
// var minMeetingRooms = function(intervals) { // Very bad time complexity O(nlogn * m)
//   let rooms = [];
//   intervals.sort((i1, i2) => i1[0] - i2[0]);
//
//   outerLoop: for(let interval of intervals) {
//     for(let i = 0; i < rooms.length; i++) {
//       if(rooms[i] <= interval[0]) {
//         rooms[i] = interval[1];
//         continue outerLoop;
//       }
//     }
//     rooms.push(interval[1]);
//   }
//   return rooms.length;
// };

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) { // Very bad time complexity O(n * m)
  const starts = intervals.map(x => x[0]);
  const ends = intervals.map(x => x[1]);
  starts.sort((s1, s2) => s1 - s2);
  ends.sort((e1, e2) => e1 - e2);
  
  let rooms = 0;
  
  for(let startIndex = 0, endIndex = 0; startIndex < starts.length; startIndex++) {
    if(starts[startIndex] < ends[endIndex]) {
      rooms++;
    } else {
      endIndex++;
    }
  }
  
  return rooms;
};

// Test
// const intervals = [[0,30],[5,10],[15,20]] // 2
// const intervals = [[7,10],[2,4]] // 1
const intervals = [[13,15],[1,13]] // 1
// tslint:disable-next-line:no-console
console.log('intervals: ', minMeetingRooms(intervals)); // eslint-disable-line no-console
