// var trap = function (height) {
//   let maxLeft = Array.from({ length: height.length }, () => 0);
//   let maxL = height[0];
//   for (let i = 1; i < height.length; i++) {
//     maxLeft[i] = maxL;
//     maxL = Math.max(maxL, height[i]);
//   }
//   let maxRight = Array.from({ length: height.length }, () => 0);
//   let maxR = height[height.length - 1];
//   for (let i = height.length - 2; i > -1; i--) {
//     maxRight[i] = maxR;
//     maxR = Math.max(maxR, height[i]);
//   }
//   let minLR = Array.from({ length: height.length }, () => 0);
//   for (let i = 1; i < height.length; i++) {
//     minLR[i] = Math.min(maxLeft[i], maxRight[i]);
//   }
//   let result = 0;
//   for (let i = 1; i < height.length; i++) {
//     result += Math.max(minLR[i] - height[i], 0);
//   }
//   return result;
// };

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      result += maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      result += maxRight - height[right];
    }
  }
  return result
};

//Test
// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 6
const height = [4, 2, 0, 3, 2, 5]; //9

console.log('trap: ', trap(height)); // eslint-disable-line no-console
