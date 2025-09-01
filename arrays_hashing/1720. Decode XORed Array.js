/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let arr = [];
  let prev = first;
  arr.push(first);
  
  for (let i = 0; i < encoded.length; i++) {
    prev = prev ^ encoded[i];
    arr.push(prev);
  }
  
  return arr;
};



const encoded = [1,2,3], first = 1; // [1,0,2,1]
// const encoded = [6,2,7,3], first = 4; // [4,2,0,7,4]
// tslint:disable-next-line:no-console
console.log('decode: ', decode(encoded, first)); // eslint-disable-line no-console
