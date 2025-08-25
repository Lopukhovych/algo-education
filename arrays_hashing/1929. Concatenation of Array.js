/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  let length = nums.length;
  let result = new Array(length * 2).fill(0);
  
  for(let i = 0; i < length; i++) {
    result[i] = nums[i];
    result[i + length] = nums[i];
  }
  return result;
};

const nums = [1,2,1]; //[1,2,1,1,2,1]
// tslint:disable-next-line:no-console
console.log('getConcatenation: ', getConcatenation(nums)); // eslint-disable-line no-console
