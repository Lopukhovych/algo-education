/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let memo = Array(nums.length).fill(false);
  let lastIndex = nums.length - 1;
  memo[lastIndex] = true;
  
  for (let i = nums.length - 2; i >= 0; i--) {
    let max = nums[i];
    if (!max) continue;
    
    if (i + max > lastIndex) {
      memo[i] = true;
      continue;
    }
    
    for (let step = 1; step <= max; step++) {
      if (memo[i + step]) {
        memo[i] = true;
        break;
      }
    }
    
  }
  
  return memo[0];
};

// var canJump = function (nums) {
//   let lastPos = nums.length - 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (i + nums[i] >= lastPos) {
//       lastPos = i;
//     }
//   }
//   return lastPos === 0;
// };

//Test
// const nums = [2,3,1,1,4]; // true
// const nums = [3,2,1,0,4]; //false
const nums = [2, 1, 0, 4]; //false

// tslint:disable-next-line:no-console
console.log('canJump: ', canJump(nums)); // eslint-disable-line no-console
