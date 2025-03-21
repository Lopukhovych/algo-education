/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let sum = 0;
  let hash = {};
  hash[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if(hash[sum - k] !== undefined) {
      count += hash[sum - k];
    }
    hash[sum] = (hash[sum] || 0) + 1
  }
  return count;
};

// Test
// const nums = [1,1,1], k = 2 //2
// const nums = [1, 2, 3], k = 3 // 2
const nums = [1, 2, 4, 1,1,1,2, 2, 1, 3], k = 3 // 5
// const nums = [-1,-1,1], k = 0 // 1
// const nums = [-1, -1, 1, 1], k = 0 // 2

// tslint:disable-next-line:no-console
console.log('subarraySum: ', subarraySum(nums, k)); // eslint-disable-line no-console
