/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let l = 0, r = 0;
  let set = new Set();
  while (r < s.length) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
};


//test
const s = "abba"; // 3
// const s = "aa"; // 1;
// const s = "bbbbb"; // 1;
// const s = "pwwkew"; // 3
// const s = " "; // 1

// tslint:disable-next-line:no-console
console.log('lengthOfLongestSubstring: ', lengthOfLongestSubstring(s)); // eslint-disable-line no-console
