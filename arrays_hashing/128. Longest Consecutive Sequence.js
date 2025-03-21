/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums);
  let longest = 0;
  for(let num of set) {
    if(!set.has(num - 1)) {
      let curr = num;
      let localLongest = 1;
      while(set.has(curr + 1)) {
        localLongest += 1;
        curr = curr + 1;
      }
      longest = Math.max(longest, localLongest)
    }
  }
  
  return longest;
};

// Test
const nums = [100,4,200,1,3,2]; //4
// const nums = [0,3,7,2,5,8,4,6,0,1] // 9
// const nums = [1,0,1,2] // 3

// tslint:disable-next-line:no-console
console.log('longestConsecutive: ', longestConsecutive(nums)); // eslint-disable-line no-console
