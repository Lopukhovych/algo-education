/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let minSum = Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if(target === sum) {
        return sum;
      }
      
      if (Math.abs(target - sum) < Math.abs(target - minSum)) {
        minSum = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return minSum;
};

//Test
// const nums = [-1, 2, 1, -4], target = 1; // 2
// const nums = [0, 0, 0], target = 1; // 0
// const nums = [10,20,30,40,50,60,70,80,90], target = 1; //60
const nums = [-4, 2, 2, 3, 3, 3], target = 0; //0
// tslint:disable-next-line:no-console
console.log('threeSumClosest: ', threeSumClosest(nums, target)); // eslint-disable-line no-console
