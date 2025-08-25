/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let result = 0;
  
  for(let i = 1; i < s.length; i++) {
    result += Math.abs(s[i].charCodeAt(0) - s[i - 1].charCodeAt(0));
  }
  
  return result;
};
new Array()

// const s = "hello"; // 13
const s = "zaz"; // 50
// tslint:disable-next-line:no-console
console.log('scoreOfString: ', scoreOfString(s)); // eslint-disable-line no-console
