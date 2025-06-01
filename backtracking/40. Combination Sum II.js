/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b); // [1,1,2,5,6,7,10]
  const result = [];
  
  function backtracking(start, list, total) {
    if(total === 0) {
      result.push([...list]);
    }
    
    if(total <= 0) {
      return;
    }
    
    for (let i = start; i < candidates.length; i++){
      if (i !== start && candidates[i] === candidates[i-1]) {
        continue
      }
      
      list.push(candidates[i]);
      backtracking(i + 1, list, total - candidates[i]);
      list.pop();
    }
  }
  
  backtracking(0, [], target);
  
  return result;
};


// Test
const candidates = [10, 1, 2, 7, 6, 1, 5], target = 8;
[
  [1,1,6],
  [1,2,5],
  [1,7],
  [2,6]
]
// const candidates = [2,5,2,1,2], target = 5;
// [
//   [1,2,2],
//   [5]
// ]
// tslint:disable-next-line:no-console
console.log('combinationSum2: ', combinationSum2(candidates, target)); // eslint-disable-line no-console
