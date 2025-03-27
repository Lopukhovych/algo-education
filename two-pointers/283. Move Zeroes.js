/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0, right = 1;
  
  while (right < nums.length) {
    if (nums[left] === 0) {
      if (nums[right] !== 0) {
        nums[left] = nums[right];
        nums[right] = 0;
        left++;
        right++;
        continue;
      }
      right++;
      continue
    }
    right++;
    left++;
  }
};

// Test
// const nums = [0,1,0,3,12];
const nums = [0];
moveZeroes(nums);
// tslint:disable-next-line:no-console
console.log('moveZeroes: ', nums); // eslint-disable-line no-console
