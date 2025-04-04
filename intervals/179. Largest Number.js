/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let str1 = a.toString()
    let str2 = b.toString();
    return str1 + str2 < str2 + str1 ? 1 : -1
  });
  
  if (nums[0] === 0) return "0";
  
  return nums.join('');
};

//Test
// const nums = [10, 2];
// const nums = [32, 3];
// const nums = [3, 30, 34, 5, 9];
const nums = [0, 0];
// tslint:disable-next-line:no-console
console.log('largestNumber: ', largestNumber(nums)); // eslint-disable-line no-console
