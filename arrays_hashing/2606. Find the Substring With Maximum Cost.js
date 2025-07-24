/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function (s, chars, vals) {
  const cost = new Array(26);
  const aCharCode = 'a'.charCodeAt(0);
  
  for (let i = 0; i < 26; i++) cost[i] = i + 1;
  for (let i = 0; i < chars.length; i++) {
    cost[chars.charCodeAt(i) - aCharCode] = vals[i];
  }
  
  let sum = 0;
  let tempSum = 0;
  let right = 0;
  while (right < s.length) {
    let val = cost[s[right].charCodeAt(0) - aCharCode];
    tempSum += val;
    if (tempSum > 0) {
      sum = Math.max(tempSum, sum);
      right += 1;
    } else {
      right = right + 1;
      tempSum = 0;
    }
  }
  
  return sum;
};

// const s = "adaa", chars = "d", vals = [-1000]; //2
// const s = "abc", chars = "abc", vals = [-1, -1, -1]; // 0
const s = "talaqlt", chars = "tqla", vals = [4, 3, 3, -2]; // 13

console.log('maximumCostSubstring: ', maximumCostSubstring(s, chars, vals)); // eslint-disable-line no-console
