/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const list = s.split('');
  let left = 0, right = list.length - 1;
  
  while (left < right) {
    if (!isLetter(list[left])) {
      left++;
      continue
    }
    if (!isLetter(list[right])) {
      right--;
      continue;
    }
    [list[left], list[right]] = [list[right], list[left]];
    left++;
    right--;
  }
  return list.join('');
};

var isLetter = function(c) {
  const code = c.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};

// Test
// let s = "ab-cd"; // "dc-ba"
// let s = "a-bC-dEf-ghIj"; // "j-Ih-gfE-dCba"
let s = "Test1ng-Leet=code-Q!" // "Qedo1ct-eeLg=ntse-T!"

// tslint:disable-next-line:no-console
console.log('reverseOnlyLetters: ', reverseOnlyLetters(s) === "Qedo1ct-eeLg=ntse-T!"); // eslint-disable-line no-console
