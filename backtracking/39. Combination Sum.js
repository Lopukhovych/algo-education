/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  
  function backtrack(start, list, sum, result) {
    
    for (let i = start; i < candidates.length; i++) {
      const newSum = sum + candidates[i];
      if (newSum > target) {
        return result;
      }
      if (newSum === target) {
        result.push([...list, candidates[i]]);
        return result;
      }
      list.push(candidates[i]);
      backtrack(i, list, newSum, result);
      list.pop();
    }
    
    return result;
  }
  
  return backtrack(0, [], 0, []);
};

// Test
// const candidates = [2, 3, 6, 7], target = 7; // [[2,2,3],[7]]
const candidates = [2, 3, 5], target = 8; // [[2,2,2,2],[2,3,3],[3,5]]
// const candidates = [2], target = 1; // []

// tslint:disable-next-line:no-console
console.log('combinationSum: ', combinationSum(candidates, target)); // eslint-disable-line no-console
