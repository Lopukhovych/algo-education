/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  if (!s.length) return 0;
  
  let stack = [];
  let preOperation = '+'
  let num = '';
  
  
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) num += s[i];
    
    if (isNaN(s[i]) || i === s.length - 1) {
      if (preOperation === '+') stack.push(+num);
      if (preOperation === '-') stack.push(-num);
      if (preOperation === '*') stack.push(stack.pop() * num);
      if (preOperation === '/') stack.push(Math.trunc(stack.pop() / num));
      
      preOperation = s[i];
      num = '';
    }
  }
  
  let result = 0;
  while (stack.length) {
    result += stack.pop();
  }
  return result;
};

// const s = "3+2*2"; // 7
const s = " 3/2 "; // 1
// const s = " 3+5 / 2 "; //5
// const s = " 34+5 / 2 "; //6
// const s = "42"; //42
// const s = "1+1+1"; //3
// const s = "2*3+4"; //10

// tslint:disable-next-line:no-console
console.log('calculate: ', calculate(s)); // eslint-disable-line no-console


// Slow solution:
var calculate1 = function (s) {
  function isNum(a) {
    return a.charCodeAt(0) > 47 && a.charCodeAt(0) < 58;
  }
  
  let stack = [];
  let operationsP1 = {
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  }
  let operationsP2 = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  }
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;
    
    if (operationsP1[s[i]] || operationsP2[s[i]]) {
      stack.push(s[i]);
      continue
    }
    
    let numStr = s[i];
    while (s[i + 1] !== undefined && isNum(s[i + 1])) {
      numStr += s[i + 1];
      i++;
    }
    stack.push(Number(numStr));
  }
  let stack1 = [];
  for (let i = 0; i < stack.length; i++) {
    if (operationsP1[stack[i]]) {
      let a = stack1.pop();
      let b = stack[i + 1];
      stack1.push(operationsP1[stack[i]](a, b));
      i += 1;
      continue;
    }
    stack1.push(stack[i])
  }
  
  let stack2 = [];
  for (let i = 0; i < stack1.length; i++) {
    if (operationsP2[stack1[i]]) {
      let a = stack2.pop();
      let b = stack1[i + 1];
      stack2.push(operationsP2[stack1[i]](a, b));
      i += 1;
      continue;
    }
    stack2.push(stack1[i])
  }
  return stack2[0]
};
