import {MinHeap} from './minHeap.js';

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // let distanceHash = new Map();
  //
  // for (let [x, y] of points) {
  //   let distance = Math.sqrt(x * x + y * y);
  //
  //   if (!distanceHash.has(distance)) {
  //     distanceHash.set(distance, []);
  //   }
  //
  //   distanceHash.get(distance).push([x, y]);
  // }
  //
  // let minHeap = new MinHeap(Array.from(distanceHash.keys()));
  // let result = [];
  //
  // while (result.length < k) {
  //   let dots = distanceHash.get(minHeap.pop());
  //   result.push(...dots);
  // }
  // return result.slice(0, k);
  
  
  return points
    .sort((a, b) => {
      let distA = a[0] * a[0] + a[1] * a[1];
      let distB = b[0] * b[0] + b[1] * b[1];
      return distA - distB;
    })
    .slice(0, k)
};


// Test
// const points = [[1, 3], [-2, 2]], k = 1;
const points = [[3, 3], [5, -1], [-2, 4]], k = 2;

// tslint:disable-next-line:no-console
console.log('kClosest: ', kClosest(points, k)); // eslint-disable-line no-console

