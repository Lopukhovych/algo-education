/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let indexs = s.length - 1;
  let indext = t.length - 1;
  
  while(indexs >= 0 || indext >= 0) {
    let skips = 0;
    while(s[indexs] === '#' || skips > 0) {
      if(s[indexs] === '#') {
        skips++;
        indexs--;
      } else {
        indexs -= 1;
        skips -= 1;
      }
    }
    
    let skipt = 0;
    while(t[indext] === '#' || skipt > 0) {
      if(t[indext] === '#') {
        skipt++;
        indext--;
      } else {
        indext -= 1;
        skipt -= 1;
      }
    }
    
    
    if(s[indexs] !== t[indext]) {
      return false;
    }
    
    indexs--;
    indext--;
  }
  
  return indexs <= 0 && indext <= 0;
};



//Test

// const s = "ab#c", t = "ad#c";
// const s = "ab##", t = "c#d#";
// const s = "a#c", t = "b";
const s = "bxj##tw", t = "bxo#j##tw"
// const s = "y#fo##f", t ="y#f#o##f";
// const s = "nzp#o#g", t = "b#nzp#o#g";
// const s = "bbbextm", t = "bbb#extm";

// tslint:disable-next-line:no-console
console.log('backspaceCompare: ', backspaceCompare(s, t)); // eslint-disable-line no-console


// Simple stacks
var backspaceCompare1 = function (s, t) {
  const sStack = [];
  const tStack = [];
  
  for (let char of s) {
    if (char !== '#') {
      sStack.push(char)
    } else {
      if (!sStack.length) continue;
      sStack.pop();
    }
  }
  
  for (let char of t) {
    if (char !== '#') {
      tStack.push(char)
    } else {
      if (!tStack.length) continue;
      tStack.pop();
    }
  }
  
  if (sStack.length !== tStack.length) return false;
  
  for (let i = 0; i < sStack.length; i++) {
    if (sStack[i] !== tStack[i]) return false;
  }
  
  return true;
};
