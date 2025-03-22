/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // const hash = {};
  // for(let num of nums) {
  //   hash[num] = (hash[num] || 0) + 1;
  // }
  // let list =  Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
  // return list
  //   .slice(0, k)
  //   .map(a => Number(a))
  
  const buckets = new Array(nums.length + 1).fill(null).map(() => [])
  const hash = new Map();
  
  for (let num of nums) {
    hash.set(num, (hash.get(num) || 0) + 1);
  }
  
  
  for (let [key, val] of hash.entries()) {
    buckets[val].push(key);
  }
  
  const result = [];
  for (let i = buckets.length - 1; i > 0; i--) {
    if (result.length >= k) {
      return result;
    }
    result.push(...buckets[i]);
  }
  return result;
};

// Test
// const nums = [1, 1, 1, 2, 2, 3], k = 2;
const nums = [4, 1, -1, 2, -1, 2, 3], k = 2;
// tslint:disable-next-line:no-console
console.log('topKFrequent: ', topKFrequent(nums, k)); // eslint-disable-line no-console
