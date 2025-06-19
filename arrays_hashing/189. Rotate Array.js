/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  
  if (k !== 0) {
    let temp = nums.slice(-k).concat(nums.slice(0, -k));
    
    for (let i = 0; i < nums.length; i++) {
      nums[i] = temp[i];
    }
  }
};

//Test
const nums = [1, 2, 3, 4, 5, 6, 7], k = 3; //[5,6,7,1,2,3,4]
rotate(nums, k);
// tslint:disable-next-line:no-console
console.log('nums: ', nums); // eslint-disable-line no-console
