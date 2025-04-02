/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let n = nums.length - 1;
  let left = 0;
  let right = n;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] > nums[n]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  const res = binarySearch(0, left - 1, nums, target);
  if (res !== -1) {
    return res;
  }
  return binarySearch(left, n, nums, target)
};

function binarySearch(left, right, nums, target) {
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

//Test
// const nums = [4, 5, 6, 7, 0, 1, 2], target = 0;
// const nums = [4,5,6,7,0,1,2], target = 3;
// const nums = [1], target = 0;
// const nums = [1, 3, 5], target = 1;
const nums = [3, 5, 1], target = 3;

// tslint:disable-next-line:no-console
console.log('search: ', search(nums, target)); // eslint-disable-line no-console
