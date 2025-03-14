/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
	if (s.length !== t.length) return false
	const hash = {}
	for (let i of s) {
		hash[i] = (hash[i] || 0) + 1;
	}
	for (let i of t) {
		if (!hash[i]) {
			return false;
		}
		hash[i] -= 1;
		if (hash[i] === 0) delete hash[i];
	}
	return true;
}


// Test

// tslint:disable-next-line:no-console
console.log('isAnagram: ', isAnagram("abbb", "bab")); // eslint-disable-line no-console
