/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var numberCount = function(a, b) {
  let uniques = 0;
  for (let num = a; num <= b; num++) {
    const numSet = new Set();
    let unique = true;
    for (let chr of String(num)) {
      if (numSet.has(chr)) {
        unique = false;
        break;
      } else {
        numSet.add(chr)
      }
    }
    if (unique) {
      uniques++;
    }
    
  }
  return uniques;
};

var numberCount = function (a, b) {
  let uniques = 0;
  for (let num = a; num <= b; num++) {
    const numSet = new Set();
    let unique = true;
    for (let char of String(num)) {
      if (numSet.has(char)) {
        unique = false;
        break;
      } else {
        numSet.add(char);
      }
    }
    if (unique) {
      uniques++;
    }
  }
  return uniques;
};

// Test

const a = 1, b = 20;

console.log('numberCount: ', numberCount(a, b)); // eslint-disable-line no-console
