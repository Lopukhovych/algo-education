/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const isNumber = (a) => a.charCodeAt(0) > 47 && a.charCodeAt(0) < 58;
  const sStack = [[]];
  const numStack = [];
  
  for (let i = 0; i < s.length; i++) {
    if (isNumber(s[i])) {
      let k = '';
      while (isNumber(s[i])) {
        k += s[i];
        i++;
      }
      numStack.push(k);
    }
    let char = s[i];
    
    if (char === '[') {
      sStack.push([]);
      continue;
    }
    
    if (char === ']') {
      let str = sStack.pop().join('');
      let k = numStack.pop();
      sStack[sStack.length - 1].push(str.repeat(k));
      continue;
    }
    sStack[sStack.length - 1].push(char);
  }
  
  return sStack[0].join('');
};

// Test
// const s = "3[a]2[bc]"; // "aaabcbc"
// const s = "3[a2[c]]"; // "accaccacc"
// const s = "2[abc]3[cd]ef" // "abcabccdcdcdef"
const s = "100[leetcode]";

// tslint:disable-next-line:no-console
console.log('decodeString: ', decodeString(s)); // eslint-disable-line no-console
