/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if(nums.length === 1) {
    return nums[0]
  }
  
  let left = 0;
  let right = nums.length - 1;
  
  if(nums[left] < nums[right]) {
    return nums[0];
  }
  
  while(left <= right) {
    let middle = Math.floor((left + right) / 2);
    
    if(nums[middle - 1] > nums[middle]) {
      return nums[middle];
    }
    
    if(nums[middle + 1] < nums[middle]) {
      return nums[middle + 1]
    }
    
    if(nums[middle] > nums[0]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
};

//Test

// const nums = [3,4,5,1,2]; // 1
// const nums = [4,5,6,7,0,1,2]; // 0
// const nums = [11,13,15,17]; // 11
const nums = [5,6,7,8,0, 1,2,3,4]; // 0

// tslint:disable-next-line:no-console
console.log('findMin: ', findMin(nums)); // eslint-disable-line no-console
