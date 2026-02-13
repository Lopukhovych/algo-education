/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (hash[diff] !== undefined) {
      return [hash[diff], i];
    }

    hash[nums[i]] = i;
  }

  return [];
};

// Test cases with various scenarios including negative numbers
console.log("twoSum [2, 7, 11, 15], target 9:", twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log("twoSum [3, 2, 4], target 6:", twoSum([3, 2, 4], 6)); // [1,2]
console.log("twoSum [3, 3], target 6:", twoSum([3, 3], 6)); // [0,1]
console.log(
  "twoSum [-1, 0, 1, 2, -1, -4], target 0:",
  twoSum([-1, 0, 1, 2, -1, -4], 0),
); // [0,2]
console.log("twoSum [-3, 4, 3, 90], target 0:", twoSum([-3, 4, 3, 90], 0)); // [0,2]
console.log("twoSum [-2, 1, 2, 4], target 2:", twoSum([-2, 1, 2, 4], 2)); // [0,2] or [1,3]
console.log("twoSum [1, 2, 3, 4, 5], target 8:", twoSum([1, 2, 3, 4, 5], 8)); // [2,4]
console.log("twoSum [5, 5, 5, 5], target 10:", twoSum([5, 5, 5, 5], 10)); // [0,1]
