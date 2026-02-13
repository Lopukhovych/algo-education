/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  // Count frequency of each number
  const freqMap = {};
  for (const num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Sort by frequency (increasing), then by value (decreasing) for ties
  return nums.sort((a, b) => {
    const freqA = freqMap[a];
    const freqB = freqMap[b];

    // If frequencies are different, sort by frequency (ascending)
    if (freqA !== freqB) {
      return freqA - freqB;
    }

    // If frequencies are the same, sort by value (descending)
    return b - a;
  });
};

// Test cases
console.log(frequencySort([1, 1, 2, 2, 2, 3])); // [3,1,1,2,2,2]
console.log(frequencySort([2, 3, 1, 3, 2])); // [1,3,3,2,2]
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])); // [5,-6,-6,4,4,-1,1,1]
console.log(frequencySort([1])); // [1]
console.log(frequencySort([1, 2, 3, 4, 5])); // [1,2,3,4,5]
