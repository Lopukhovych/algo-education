/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const result = [];
	const hash = {};
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (diff < 0) continue;
		if (hash[diff] !== undefined) {
			result.push(hash[diff], i);
			delete hash[diff]
		} else {
			hash[nums[i]] = i;
		}
	}

	return result;
};


// Test
// const nums = [2, 7, 11, 15], target = 9; // [0,1]
const nums = [3, 2, 4], target = 6; // [1,2]
// tslint:disable-next-line:no-console
console.log('twoSum: ', twoSum(nums, target)); // eslint-disable-line no-console
