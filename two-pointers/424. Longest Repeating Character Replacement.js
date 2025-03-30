/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0;
  let frequencyMap = {};
  let maxFrequency = 0;
  let longestSubstringLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    frequencyMap[s[right]] = (frequencyMap[s[right]] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, frequencyMap[s[right]]);
    
    const isValid = right - left + 1 - maxFrequency <= k;
    
    if (!isValid) {
      frequencyMap[s[left]] -= 1;
      left++;
    }
    
    longestSubstringLength = right - left + 1;
  }
  
  return longestSubstringLength;
};

// Test
// const s = "ABACBBBCB", k = 2; // 4
// const s = "AABABBA", k = 1 // 4
const s = "CAAABCBABBA", k = 2 // 6

// tslint:disable-next-line:no-console
console.log('characterReplacement: ', characterReplacement(s, k)); // eslint-disable-line no-console
