/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
	if(s.length < p.length) return [];

	let result = [];
	let hash = {}

	for(let i of p) {
		hash[i] = (hash[i] || 0) + 1;
	}

	let left = 0;
	let right = 0;
	let	count = p.length;

	while(right < s.length) {
		if(hash[s[right]] > 0) {
			count -= 1;
		}
		hash[s[right]] -=1;
		right++;

		if(count === 0) {
			result.push(left)
		}

		if(right - left === p.length) {
			if(hash[s[left]] >= 0) {
				count += 1;
			}
			hash[s[left]]++;
			left++;
		}
	}

	return result;
};

//Test
let s = "cbaebabacd", p = "abc" //[0,6]
// let s = "abab", p = "ab"; //[0,1,2]
// tslint:disable-next-line:no-console
console.log('findAnagrams: ', findAnagrams(s, p)); // eslint-disable-line no-console
