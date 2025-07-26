/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  
  let result = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < nums.length - 1 && nums[i] !== 0; j++) {
      while (k < nums.length && nums[i] + nums[j] > nums[k]) {
        k++;
      }
      result += k - j - 1;
    }
  }
  return result;
};

// const nums = [2, 2, 3, 4]; //3
// const nums = [2, 2, 3, 4, 5]; //6
const nums = [2,4,3,4]; // 4
// tslint:disable-next-line:no-console
console.log('triangleNumber: ', triangleNumber(nums)); // eslint-disable-line no-console
