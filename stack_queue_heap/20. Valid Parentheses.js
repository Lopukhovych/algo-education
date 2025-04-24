/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const hash = {
    '}': '{',
    ']': '[',
    ')': '('
  }
  
  if(s.length % 2 !== 0) return false;
  
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let elem = s[i];
    if (hash[elem]) {
      if (result.length > 0 && result[result.length - 1] === hash[elem]) {
        result.pop();
      } else {
        return false;
      }
    } else {
      result.push(elem);
    }
  }
  
  return result.length === 0;
};

// Test
// const s = '()'; // true
// const s = '()[]{}'; // true
// const s = '(]'; // false
const s = '{{}}()[{()}]'; //true

// tslint:disable-next-line:no-console
console.log('isValid: ', isValid(s)); // eslint-disable-line no-console
