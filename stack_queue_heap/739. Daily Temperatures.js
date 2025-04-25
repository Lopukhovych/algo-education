/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  if(!temperatures.length) return [];
  const stack = [];
  let maxTemperature = [];
  
  for(let i = temperatures.length - 1; i >= 0; i--) {
    if(!stack.length) {
      stack.push(0);
      maxTemperature.push([temperatures[i], i]);
    } else if(temperatures[i] < temperatures[i + 1]) {
      stack.push(1);
      maxTemperature.push([temperatures[i], i]);
    } else {
      while(maxTemperature.length) {
        if(temperatures[i] >= maxTemperature[maxTemperature.length - 1][0]) {
          maxTemperature.pop();
        } else {
          stack.push(maxTemperature[maxTemperature.length - 1][1] - i);
          maxTemperature.push([temperatures[i], i]);
          break;
        }
      }
      
      if(!maxTemperature.length) {
        stack.push(0);
        maxTemperature.push([temperatures[i], i]);
      }
    }
  }
  return stack.reverse();
};

// Test
const temperatures = [73,74,75,71,69,72,76,73]; // [1,1,4,2,1,1,0,0]
// const temperatures = [30,40,50,60] //[1,1,1,0]
// const temperatures = [30, 60, 90] //[1,1,0]

// tslint:disable-next-line:no-console
console.log('dailyTemperatures: ', dailyTemperatures(temperatures)); // eslint-disable-line no-console


// Slow
var dailyTemperatures1 = function (temperatures) {
  let stack = [];
  let stackIndex = [];
  let result = [];
  for (let i = 0; i < temperatures.length; i++) {
    if (stack.length) {
      while(stack[stack.length - 1] < temperatures[i]) {
        result[stackIndex[stackIndex.length - 1]] = i - stackIndex[stackIndex.length - 1];
        stack.pop();
        stackIndex.pop();
      }
    }
    if (temperatures[i] < temperatures[i + 1]) {
      result[i] = 1;
    } else {
      stack.push(temperatures[i])
      stackIndex.push(i);
    }
  }
  
  if (stack.length) {
    while(stack.length) {
      result[stackIndex.pop()] = 0;
      stack.pop();
    }
  }
  
  return result;
};
