/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] < target) {
      left++;
      continue;
    }
    if (numbers[left] + numbers[right] > target) {
      right--;
      continue;
    }
    return [left + 1, right + 1];
  }
  
  return [];
};

//Test
const numbers = [2, 7, 11, 15], target = 9; //[1,2]
// const numbers = [2,3,4], target = 6; //[1,3]
// const numbers = [-1,0], target = -1 // [1,2]

// tslint:disable-next-line:no-console
console.log('twoSum: ', twoSum(numbers, target)); // eslint-disable-line no-console
