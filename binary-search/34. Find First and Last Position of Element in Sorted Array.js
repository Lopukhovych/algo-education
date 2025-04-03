/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length || target < nums[0] || target > nums[nums.length - 1]) {
    return [-1, -1];
  }
  let start = binarySearch(0, nums.length - 1, true);
  
  if (start === -1) {
    return [-1, -1]
  }
  let end = binarySearch(start, nums.length - 1, false);
  return [start, end];
  
  
  function binarySearch(start, end, isSearchLeft) {
    let left = start;
    let right = end;
    let idx = -1;
    
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (target < nums[middle]) {
        right = middle - 1;
        continue;
      }
      
      if (target > nums[middle]) {
        left = middle + 1;
        continue
      }
      
      idx = middle;
      if (isSearchLeft) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    
    return idx;
  }
};

//Test
const nums = [5, 7, 7, 8, 8, 10], target = 8; //[3,4]
// const nums = [5, 7, 7, 8, 8, 10], target = 6; // [-1,-1]
// const nums = [], target = 0; // [-1,-1]
// tslint:disable-next-line:no-console
console.log('searchRange: ', searchRange(nums, target)); // eslint-disable-line no-console
