/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  
  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    
    if (nums[middle] === target) {
      return middle;
    }
    
    if (nums[middle] > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  
  return -1;
};

// Test

// const nums = [-1, 0, 3, 5, 9, 12], target = 9; // 4
// const nums = [-1, 0, 3, 5, 9, 12], target = 9; // 4
const nums = [5], target = 5; // 0

// tslint:disable-next-line:no-console
console.log('search: ', search(nums, target)); // eslint-disable-line no-console
