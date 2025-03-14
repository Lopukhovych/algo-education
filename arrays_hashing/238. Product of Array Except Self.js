/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	let result = Array(nums.length).fill(0);
	result[0] = 1;
	for(let i = 1; i < nums.length; i++) {
		result[i] = result[i - 1] * nums[i - 1];
	}
	let R = 1;
	for(let i = nums.length - 1; i > -1; i--) {
		result[i] = result[i] * R;
		R *= nums[i];
	}

	return result;
};


//Test
const nums = [1,2,3,4];
// const nums = [-1,1,0,-3,3];
console.log('productExceptSelf: ', productExceptSelf(nums)); // eslint-disable-line no-console
