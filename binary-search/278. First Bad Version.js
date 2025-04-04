/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */


/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 0;
    let end = n;
    
    while (start < end) {
      let middle = Math.floor((start + end) / 2);
      if (isBadVersion(middle)) {
        end = middle;
      } else {
        start = middle + 1;
      }
    }
    
    return start;
  };
};

const n = 5, bad = 4;

function isBadVersion(number) {
  return number === bad;
  
}

const getFirstBadVersion = solution(isBadVersion);
// tslint:disable-next-line:no-console
console.log('solution: ', getFirstBadVersion(n)); // eslint-disable-line no-console
