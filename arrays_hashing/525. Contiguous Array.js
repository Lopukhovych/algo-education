/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let maxLength = 0;
  const hash = {};
  let count = 0;
  hash[0] = -1;
  for (let i = 0; i < nums.length; i++) {
    count = count + (nums[i] === 1 ? 1 : -1);
    if (hash[count] !== undefined) {
      maxLength = Math.max(maxLength, i - hash[count]);
    } else {
      hash[count] = i;
    }
  }
  return maxLength;
};

// Test

// const nums = [0, 1] // 2
// const nums = [0,1,0]; //2
// const nums = [0,1,1,1,1,1,0,0,0]; // 6
const nums = [0, 1, 0, 1]; // 4
// tslint:disable-next-line:no-console
console.log('findMaxLength: ', findMaxLength(nums)); // eslint-disable-line no-console
