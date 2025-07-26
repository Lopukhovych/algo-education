/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length && nums[i] <= 0; ++i) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          res.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
};

//Test
// const nums = [-1, -1, -1, 0, 0, 1, 2, 2, -1, -4]; //[ [ -4, 2, 2 ], [ -1, -1, 2 ], [ -1, 0, 1 ] ]
const nums = [-1,0,1,2,-1,-4]; //[[-1,-1,2],[-1,0,1]]
// const nums = [0,1,1]; // []
// const nums = [0, 0, 0] // [[0,0,0]]
// const nums = [0, 0, 0, 0]; // [[0,0,0]]

// tslint:disable-next-line:no-console
console.log('threeSum: ', threeSum(nums)); // eslint-disable-line no-console


// non sorting
// function threeSum(nums) {
//   const res = new Set();
//   const dups = new Set();
//   const seen = new Map();
//
//   for (let i = 0; i < nums.length; i++) {
//     if (!dups.has(nums[i])) {
//       dups.add(nums[i]);
//       for (let j = i + 1; j < nums.length; j++) {
//         let complement = -nums[i] - nums[j];
//         if (seen.has(complement) && seen.get(complement) === i) {
//           let triplet = ([nums[i], nums[j], complement]).sort((a, b) => a - b);
//           res.add(JSON.stringify(triplet));
//         }
//         seen.set(nums[j], i);
//       }
//     }
//   }
//
//   return Array.from(res, JSON.parse);
// }
