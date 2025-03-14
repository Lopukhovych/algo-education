/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	if (intervals.length === 0) return [];
	intervals.sort((a, b) => a[0] - b[0]);
	const result = [intervals[0]];

	for (let i = 1; i < intervals.length; i++) {
		let currentInterval = intervals[i];
		let lastInterval = result[result.length - 1];
		if(currentInterval[0] < lastInterval[1]) {
			lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
		} else {
			result.push(currentInterval)
		}
	}

	return result;
};

const intervals = [[1,3],[2,6],[8,10],[15,18]] // [[1,6],[8,10],[15,18]]
// const intervals = [[1, 4], [4, 5]]; // [[1,5]]
// const intervals = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]];

// tslint:disable-next-line:no-console
console.log('merge: ', merge(intervals)); // eslint-disable-line no-console
