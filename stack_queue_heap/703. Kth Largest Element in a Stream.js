import {MinHeap} from "./minHeap.js";
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.minheap = new MinHeap(nums);
  this.size = k;
  while(this.minheap.heap.length > this.size) {
    this.minheap.pop();
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.minheap.push(val);
  if(this.minheap.heap.length > this.size) {
    this.minheap.pop();
  }
  return this.minheap.peek();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
const k = 3, nums = [4, 5, 8, 2];

var kthLargest = new KthLargest(k, nums)
console.log(kthLargest.add(3)); // return 4
console.log(kthLargest.add(5)); // return 5
console.log(kthLargest.add(10)); // return 5
console.log(kthLargest.add(9)); // return 8
console.log(kthLargest.add(4)); // return 8
