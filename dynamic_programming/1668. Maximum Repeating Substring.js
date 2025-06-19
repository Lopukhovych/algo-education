/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let result = 0;
  while (sequence.includes(word.repeat(result + 1))) {
    result += 1;
  }
  
  return result;
};
// const sequence = "ababc", word = "ab"; // 2
// const sequence = "ababc", word = "ba"; // 1
// const sequence = "ababc", word = "ac"; // 0
const sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba", word = "aaaba"; // 5
// tslint:disable-next-line:no-console
console.log('maxRepeating: ', maxRepeating(sequence, word)); // eslint-disable-line no-console
