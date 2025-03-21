/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0, candidate = null;
  
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  
  return candidate;
};

//Test
// const nums = [3, 2, 3]; // 3
// const nums = [3, 3, 4]; // 3
const nums = [2,1,2,3,2,1,2, 3, 3] // 2
// tslint:disable-next-line:no-console
console.log('majorityElement: ', majorityElement(nums)); // eslint-disable-line no-console

