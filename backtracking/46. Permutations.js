/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  
  function backtrack(curr) {
    if(curr.length === nums.length) {
      result.push([...curr]);
      return;
    }
    
    for(let elem of nums) {
      if(curr.includes(elem)) continue;
      curr.push(elem);
      backtrack(curr);
      curr.pop();
    }
  }
  
  backtrack([]);
  return result;
};


const nums = [1,2,3]; // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// const nums = [0,1]; //[[0,1],[1,0]]
// tslint:disable-next-line:no-console
console.log('permute: ', permute(nums)); // eslint-disable-line no-console

