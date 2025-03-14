/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let hash = {}
	for (let i of nums) {
		if (hash[i]) return true;
		hash[i] = true
	}
	return false;
};


// Test
// const nums = [1,2,3,1];
const nums = [1, 0, 3, 4, 0];

// tslint:disable-next-line:no-console
console.log('containsDuplicate: ', containsDuplicate(nums)); // eslint-disable-line no-console
