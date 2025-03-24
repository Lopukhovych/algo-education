/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanHash = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if(s[i] === 'I') {
      if(s[i + 1] === "V") {
        sum += 4;
        i++;
        continue;
      }
      if(s[i + 1] === "X") {
        sum += 9;
        i++;
        continue;
      }
    }
    if(s[i] === 'X') {
      if(s[i + 1] === "L") {
        sum += 40;
        i++;
        continue;
      }
      if(s[i + 1] === "C") {
        sum += 90;
        i++;
        continue;
      }
    }
    if(s[i] === 'C') {
      if(s[i + 1] === "D") {
        sum += 400;
        i++;
        continue;
      }
      if(s[i + 1] === "M") {
        sum += 900;
        i++;
        continue;
      }
    }
    sum += romanHash[s[i]];
  }
  
  return sum;
};

//Test
// const s = "LIV"; // 3
const s = "CMXXVIII" // 58

// tslint:disable-next-line:no-console
console.log('romanToInt: ', romanToInt(s)); // eslint-disable-line no-console
