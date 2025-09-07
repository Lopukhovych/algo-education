/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let result = 0;
  for (let detail of details) {
    if (Number(detail[11] + detail[12]) > 60) {
      result++;
    }
  }
  return result;
};
