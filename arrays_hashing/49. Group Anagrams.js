/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	let result = [];
	let hash = {};
	for(let str of strs) {
		let sorted = Array.from(str).sort();
		if(hash[sorted]) {
			hash[sorted].push(str);
		} else {
			hash[sorted] = [str];
		}
	}
	for (let key in hash) {
		result.push(hash[key]);
	}
	return result;
};

//Test
// let strs = ["eat","tea","tan","ate","nat","bat"]; // [["bat"],["nat","tan"],["ate","eat","tea"]]
// let strs = [""]; //[[""]]
let strs = ["a"]; //[["a"]]
// tslint:disable-next-line:no-console
console.log('groupAnagrams: ', groupAnagrams(strs)); // eslint-disable-line no-console
