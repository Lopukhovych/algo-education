/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  let hash = {
    '0': [],
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  let res = [];
  
  function backtrac(str, index) {
    if (index >= digits.length) {
      res.push(str);
      return
    }
    
    for (let letter of hash[digits[index]]) {
      str += letter;
      backtrac(str, index + 1);
      str = str.slice(0, -1);
    }
  }
  
  backtrac('', 0)
  return res;
};

// var letterCombinations = function (digits) {
//   let result = [];
//   let hash = {
//     '0': [],
//     '1': [],
//     '2': ['a', 'b', 'c'],
//     '3': ['d', 'e', 'f'],
//     '4': ['g', 'h', 'i'],
//     '5': ['j', 'k', 'l'],
//     '6': ['m', 'n', 'o'],
//     '7': ['p', 'q', 'r', 's'],
//     '8': ['t', 'u', 'v'],
//     '9': ['w', 'x', 'y', 'z']
//   }
//   for (let i = 0; i < digits.length; i++) {
//     let symbols = hash[digits[i]];
//     if (!symbols.length) continue;
//     let newResult = [];
//     for (let symbol of symbols) {
//       let symbolArray = result.length ? result.map((str) => str + symbol) : [symbol];
//       newResult.push(...symbolArray);
//     }
//     result = newResult;
//   }
//
//   return result;
// };

//Test
const digits = "23"; // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// const digits = ""; // []
// const digits = "2"; // ["a","b","c"]

// tslint:disable-next-line:no-console
console.log('letterCombinations: ', letterCombinations(digits)); // eslint-disable-line no-console

