/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const hash = {}
  for (let char of magazine) {
    hash[char] = (hash[char] || 0) + 1;
  }
  for (let char of ransomNote) {
    if (hash[char]) {
      hash[char] -= 1;
    } else {
      return false
    }
  }
  return true;
};


// Test
// const ransomNote = "a", magazine = "b"; // false
// const ransomNote = "aa", magazine = "ab" // false
const ransomNote = "aa", magazine = "aab" // true

// tslint:disable-next-line:no-console
console.log('canConstruct: ', canConstruct(ransomNote, magazine)); // eslint-disable-line no-console
