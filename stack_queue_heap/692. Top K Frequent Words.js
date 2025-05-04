import {MaxHeap} from "./maxHeap.js";

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const workMap = {}
  words.forEach(work => {
    workMap[work] = (workMap[work] || 0) + 1;
  });
  const freqMap = {};
  Object.keys(workMap).forEach((key) => {
    let value = workMap[key];
    if (freqMap[value]) {
      freqMap[value].push(key);
    } else {
      freqMap[value] = [key];
    }
  });
  Object.keys(freqMap).forEach((key) => {
    freqMap[key].sort();
  })
  const maxHeap = new MaxHeap(Object.keys(freqMap).map(Number));
  let result = [];
  
  while (result.length < k && maxHeap.heap.length) {
    let freq = maxHeap.pop();
    result.push(...freqMap[freq]);
  }
  
  return result.slice(0, k);
};

//Test
// const words = ["i","love","leetcode","i","love","coding"], k = 1; //["i","love"]
// const words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4; //["the","is","sunny","day"]

const words = ["plpaboutit", "jnoqzdute", "sfvkdqf", "mjc", "nkpllqzjzp", "foqqenbey", "ssnanizsav", "nkpllqzjzp", "sfvkdqf", "isnjmy", "pnqsz", "hhqpvvt", "fvvdtpnzx", "jkqonvenhx", "cyxwlef", "hhqpvvt", "fvvdtpnzx", "plpaboutit", "sfvkdqf", "mjc", "fvvdtpnzx", "bwumsj", "foqqenbey", "isnjmy", "nkpllqzjzp", "hhqpvvt", "foqqenbey", "fvvdtpnzx", "bwumsj", "hhqpvvt", "fvvdtpnzx", "jkqonvenhx", "jnoqzdute", "foqqenbey", "jnoqzdute", "foqqenbey", "hhqpvvt", "ssnanizsav", "mjc", "foqqenbey", "bwumsj", "ssnanizsav", "fvvdtpnzx", "nkpllqzjzp", "jkqonvenhx", "hhqpvvt", "mjc", "isnjmy", "bwumsj", "pnqsz", "hhqpvvt", "nkpllqzjzp", "jnoqzdute", "pnqsz", "nkpllqzjzp", "jnoqzdute", "foqqenbey", "nkpllqzjzp", "hhqpvvt", "fvvdtpnzx", "plpaboutit", "jnoqzdute", "sfvkdqf", "fvvdtpnzx", "jkqonvenhx", "jnoqzdute", "nkpllqzjzp", "jnoqzdute", "fvvdtpnzx", "jkqonvenhx", "hhqpvvt", "isnjmy", "jkqonvenhx", "ssnanizsav", "jnoqzdute", "jkqonvenhx", "fvvdtpnzx", "hhqpvvt", "bwumsj", "nkpllqzjzp", "bwumsj", "jkqonvenhx", "jnoqzdute", "pnqsz", "foqqenbey", "sfvkdqf", "sfvkdqf"],
  k = 1;

// tslint:disable-next-line:no-console
console.log('topKFrequent: ', topKFrequent(words, k)); // eslint-disable-line no-console
