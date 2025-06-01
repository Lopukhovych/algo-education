/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  
  function backtrack(arr, index) {
    result.push([...arr]);
    
    if (index === nums.length) return;
    
    for (let i = index; i < nums.length; i++) {
      if (i !== index && nums[i] === nums[i - 1]) continue;
      arr.push(nums[i])
      backtrack(arr, i + 1);
      arr.pop();
    }
  }
  
  backtrack([], 0);
  return result;
};

// const nums = [1, 2, 3]; // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]];
const nums = [1,2,2]; //[[],[1],[1,2],[1,2,2],[2],[2,2]]
// [[], [1], [1,2], [1,2,2], [2], [2,2]]

// tslint:disable-next-line:no-console
console.log('subsetsWithDup: ', subsetsWithDup(nums)); // eslint-disable-line no-console
