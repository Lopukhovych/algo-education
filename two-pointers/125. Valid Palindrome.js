/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    if (!isChar(s[left])) {
      left++;
      continue;
    }
    if (!isChar(s[right])) {
      right--;
      continue;
    }
    if (s[left] !== s[right]) {
      return false
    }
    left++;
    right--;
  }
  
  return true;
};

function isChar(c) {
  return (c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
    (c.charCodeAt(0) >= 'A'.charCodeAt(0) && c.charCodeAt(0) <= 'Z'.charCodeAt(0)) ||
    (c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0));
}

const example = "A man, a plan, a canal: Panama";
// tslint:disable-next-line:no-console
console.log('isPalindrome: ', isPalindrome(example)); // eslint-disable-line no-console
