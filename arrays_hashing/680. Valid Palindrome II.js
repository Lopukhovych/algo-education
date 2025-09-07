/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  function checkPalindrom(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) return false;
      
      left++;
      right--;
    }
    return true
  }
  
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return checkPalindrom(left + 1, right) || checkPalindrom(left, right - 1)
    }
    
    left++;
    right--;
  }
  
  return true;
};
