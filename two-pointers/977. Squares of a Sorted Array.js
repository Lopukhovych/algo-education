/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = new Array(nums.length).fill(0);
  
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) <= Math.abs(nums[right])) {
      result[i] = nums[right] ** 2;
      right--;
    } else {
      result[i] = nums[left] ** 2;
      left++;
    }
  }
  
  return result;
};


// var sortedSquares = function(nums) {
//   return nums.map(a => a * a).sort((a, b) => a - b);
// };

//Test
// const nums = [-4,-1,0,3,10]; //[0,1,9,16,100]
// const nums = [-7, -3, 2, 3, 11]; //[4,9,9,49,121]
const nums = [-11, -1, 0, 3, 10]; //[0,1,9,100, 121]

// tslint:disable-next-line:no-console
console.log('sortedSquares: ', sortedSquares(nums)); // eslint-disable-line no-console
