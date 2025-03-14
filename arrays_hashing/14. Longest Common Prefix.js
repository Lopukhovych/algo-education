/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (!strs.length) return "";

	for (let i = 0; i < strs[0].length; i++) {
		const char = strs[0][i];

		for (let j = 1; j < strs.length; j++) {
			if (strs[j][i] !== char) {
				return strs[0].substring(0, i);
			}
		}
	}

	return strs[0];
};


//Test
// const strs = ["flower","flow","flight"]; // "fl"
// const strs = ["dog", "racecar", "car"] // ""
const strs = ["dog", "dog1", "doggs"] // ""
// tslint:disable-next-line:no-console
console.log('longestCommonPrefix: ', `-${longestCommonPrefix(strs)}-`); // eslint-disable-line no-console
