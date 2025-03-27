/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", 'I'];
  let result = "";
  
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      result += romans[i];
    }
  }
  
  return result;
};

// Test
// let num = 3; // "III"
// let num = 3749; // "MMMDCCXLIX"
// let num = 58; // "LVIII'
// let num = 565; // "DLXV'
let num = 1994; // "MCMXCIV"

// tslint:disable-next-line:no-console
console.log('intToRoman: ', intToRoman(num)); // eslint-disable-line no-console
