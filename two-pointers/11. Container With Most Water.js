/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while(left < right) {
    let min = Math.min(height[left], height[right]);
    max = Math.max(max, min * (right - left));
    if(height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

// Test
const height = [1,8,6,2,5,4,8,3,7]; //49
// const height = [1,1]; //1

