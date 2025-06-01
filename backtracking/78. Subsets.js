/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  // nums.sort((a, b) => a - b);
  const backtrack = (arr, index) => {
    result.push([...arr])
    
    if (index === nums.length) return;
    
    for (let i = index; i < nums.length; i++) {
      arr.push(nums[i]);
      backtrack(arr, i + 1);
      arr.pop();
    }
  };
  
  backtrack([], 0);
  return result;
};

const nums = [1, 2, 3]; // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]];
// const nums = [0]; // [[],[0]];
// [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]];

// tslint:disable-next-line:no-console
console.log('subsets: ', subsets(nums)); // eslint-disable-line no-console
