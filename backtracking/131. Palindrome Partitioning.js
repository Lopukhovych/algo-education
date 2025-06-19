/**
 * @param {string} str
 * @return {string[][]}
 */
var partition = function (str) {
  let result = [];
  
  function isPalindrome(left, right) {
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  
  function dfs(index, part) {
    if (index >= str.length) {
      result.push([...part]);
      return;
    }
    
    for (let j = index; j < str.length; j++) {
      if (isPalindrome(index, j)) {
        part.push(str.slice(index, j + 1));
        dfs(j + 1, part);
        part.pop();
      }
    }
  }
  
  dfs(0, []);
  return result;
};


// Test
// const s = "aab"; // [["a","a","b"],["aa","b"]]
const s = "aabb";

// tslint:disable-next-line:no-console
console.log('partition: ', partition(s)); // eslint-disable-line no-console
