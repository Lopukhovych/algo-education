/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
  let ans = [];
  let n = words.length;
  for (let i = 0; i < n; i++) {
    if (i === 0 || groups[i] !== groups[i - 1]) {
      ans.push(words[i]);
    }
  }
  return ans;
};


//Test
const words = ["e","a","b"], groups = [0,0,1];
// tslint:disable-next-line:no-console
console.log('getLongestSubsequence: ', getLongestSubsequence(words, groups)); // eslint-disable-line no-console

