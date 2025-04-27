/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let last = stack[stack.length - 1];
    
    if (last === undefined || last < 0 || asteroids[i] > 0) {
      stack.push(asteroids[i]);
      continue;
    }
    
    if (last === -asteroids[i]) {
      stack.pop();
      continue;
    }
    
    if (last < -asteroids[i]) {
      stack.pop();
      i--;
    }
  }
  
  return stack;
};

// Test
// const asteroids = [5, 10, -5] //[5,10]
// const asteroids = [8, -8]; // []
// const asteroids = [10,2,-5]; // [10]
const asteroids = [-2, -1, 1, 2]; // [10]

// tslint:disable-next-line:no-console
console.log('asteroidCollision: ', asteroidCollision(asteroids)); // eslint-disable-line no-console
