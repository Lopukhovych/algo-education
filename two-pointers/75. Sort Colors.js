/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p0 = 0;
  let p2 = nums.length - 1;
  let curr = 0;
  
  while (curr <= p2) {
    if (nums[curr] === 2) {
      nums[curr] = nums[p2];
      nums[p2] = 2;
      p2--;
      continue;
    }
    if (nums[curr] === 0) {
      nums[curr] = nums[p0];
      nums[p0] = 0;
      curr++;
      p0++;
      continue;
    }
    curr++;
  }
};

//Test
// const nums = [2,0,2,1,1,0]; //[0,0,1,1,2,2]
const nums = [2, 0, 1]; //[0,1,2]

sortColors(nums);
console.log('sortColors: ', nums); // eslint-disable-line no-console
