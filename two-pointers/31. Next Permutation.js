/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 2;
  while(i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  
  if(i >= 0) {
    let j = nums.length - 1;
    while(nums[j] <= nums[i]) {
      j--;
    }
    swap(i, j);
  }
  let left = i + 1;
  let right = nums.length - 1;
  while(left < right) {
    swap(left, right);
    left++;
    right--;
  }
  
  function swap(i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
};

// Test
// const nums = [1, 2, 3]; // [1,3,2]
// const nums = [3,2,1]; // [1,2,3]
// const nums = [1, 1, 5]; // [1,5,1]
const nums = [1, 5, 8, 4, 7, 6, 5, 3, 1]; //  [1, 5, 8, 5, 1, 3, 4, 6, 7]

nextPermutation(nums);

console.log('nextPermutation: ', nums); // eslint-disable-line no-console
