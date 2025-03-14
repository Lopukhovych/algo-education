/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	if (!intervals.length) {
		return [newInterval];
	}

	if (newInterval[1] < intervals[0][0]) {
		return [newInterval, ...intervals];
	}

	const result = [];

	let [start, finish] = newInterval;
	let i = 0;

	while (i < intervals.length && start > intervals[i][1]) {
		result.push(intervals[i]);
		i++;
	}

	while (i < intervals.length && finish >= intervals[i][0]) {
		start = start < intervals[i][0] ? start : intervals[i][0];
		finish = finish > intervals[i][1] ? finish : intervals[i][1];
		i++;
	}

	result.push([start, finish]);

	while (i < intervals.length) {
		result.push(intervals[i]);
		i++;
	}

	return result;
};


// const intervals = [[1, 3], [6, 9]], newInterval = [2, 5]; //[[1,5],[6,9]]
// const intervals = [[1, 5]], newInterval = [2, 3]; // [[1,5]]
// const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]; // [[1,2],[3,10],[12,16]]
const intervals = [[1, 5]], newInterval = [6, 8]; // [[1,5],[6,8]]
// tslint:disable-next-line:no-console
console.log('insert: ', insert(intervals, newInterval)); // eslint-disable-line no-console


