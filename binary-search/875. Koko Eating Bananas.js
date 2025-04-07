/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let minSpeed = 0;
  let maxSpeed = Math.max(...piles);
  while (minSpeed < maxSpeed) {
    const speed = Math.floor((minSpeed + maxSpeed) / 2);
    
    let hours = 0;
    
    for(let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / speed);
    }
    
    if(hours <= h) {
      maxSpeed = speed;
    } else {
      minSpeed = speed + 1;
    }
  }
  
  return maxSpeed;
};

//Test
// const piles = [3,6,7,11], h = 8; // 4
// const piles = [30,11,23,4,20], h = 5; // 30
const piles = [30, 11, 23, 4, 20], h = 6; //23


// tslint:disable-next-line:no-console
console.log('minEatingSpeed: ', minEatingSpeed(piles, h)); // eslint-disable-line no-console
