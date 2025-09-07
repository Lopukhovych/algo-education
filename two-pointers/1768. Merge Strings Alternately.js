/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = '';
  let len1 = word1.length;
  let len2 = word2.length;
  let min = len1 < len2 ? len1 : len2;
  for (let i = 0; i < min; i++) {
    result += word1[i];
    result += word2[i];
  }
  
  result += word1.slice(min);
  result += word2.slice(min);
  
  return result;
};
