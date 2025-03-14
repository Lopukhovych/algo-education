/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	let set = new Set();
	let count = 0;
	for (let i of s) {
		if (set.has(i)) {
			count += 2;
			set.delete(i);
		} else {
			set.add(i)
		}
	}

	if (set.size) {
		count += 1;
	}

	return count;
};


//Test
const s = "abccccdd";
// tslint:disable-next-line:no-console
console.log('longestPalindrome: ', longestPalindrome('abccccdd')); // eslint-disable-line no-console
