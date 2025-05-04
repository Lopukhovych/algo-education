import {MaxHeap} from "./maxHeap.js";

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxHeap(stones);
  while (maxHeap.heap.length > 1) {
    let diff = Math.abs(maxHeap.pop() - maxHeap.pop());
    if (diff) {
      maxHeap.push(diff);
    }
  }
  return maxHeap.peek() || 0;
};

// Test
const stones = [2,7,4,1,8,1]
// tslint:disable-next-line:no-console
console.log('lastStoneWeight: ', lastStoneWeight(stones)); // eslint-disable-line no-console
