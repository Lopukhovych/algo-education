import {MinHeap} from './minHeap.js'

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const countList = {};
  tasks.forEach(task => {
    countList[task] = (countList[task] || 0) + 1;
  })
  const minHeap = new MinHeap(Object.values(countList).map(value => -value));
  let time = 0;
  let queue = [];
  
  while (minHeap.peek() || queue.length) {
    time++;
    if (minHeap.peek()) {
      let count = 1 + minHeap.pop();
      if (count) {
        queue.push([count, time + n])
      }
    }
    if (queue.length && queue[0][1] === time) {
      minHeap.push(queue.shift()[0]);
    }
  }
  
  return time;
};


//Task
// const tasks = ["A", "A", "A", "B", "B", "B"], n = 2; //8
// const tasks = ["A","C","A","B","D","B"], n = 1; //6
const tasks = ["A","A","A", "B","B","B"], n = 3 // 10;

// tslint:disable-next-line:no-console
console.log('leastInterval: ', leastInterval(tasks, n)); // eslint-disable-line no-console


// const maxHeap = new MaxHeap();
// maxHeap.push(1);
// maxHeap.push(12);
// maxHeap.push(3);
// maxHeap.push(5);
// maxHeap.push(10);
// maxHeap.push(9);
// // tslint:disable-next-line:no-console
// console.log('maxHeap: ', maxHeap.heap); // eslint-disable-line no-console
