/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b)
  }
  
  let stack = [];
  for (let char of tokens) {
    if (operations[char]) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operations[char](a, b));
      continue;
    }
    
    stack.push(+char);
  }
  return Number(stack[0]);
};

//Test
// const tokens = ["2","1","+","3","*"]; //9
// const tokens = ["4","13","5","/","+"]; // 6
// const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]; //22
// const tokens = ["18"]; //18
const tokens = ["4", "-2", "/", "2", "-3", "-", "-"]; //-7

// tslint:disable-next-line:no-console
console.log('evalRPN: ', evalRPN(tokens)); // eslint-disable-line no-console

