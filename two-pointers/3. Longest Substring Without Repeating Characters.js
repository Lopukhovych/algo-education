/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxL = 0;
  const hash = new Map();
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (hash.has(s[right])) {
      left = Math.max(hash.get(s[right]), left);
    }
    maxL = Math.max(right - left + 1, maxL);
    hash.set(s[right], right + 1);
  }
  return maxL;
};


//test
// const s = "abcabcbb"; // 3
// const s = "aa"; // 1;
// const s = "bbbbb"; // 1;
// const s = "pwwkew"; // 3
const s = " "; // 1

// tslint:disable-next-line:no-console
console.log('lengthOfLongestSubstring: ', lengthOfLongestSubstring(s)); // eslint-disable-line no-console
