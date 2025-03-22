var RandomizedSet = function () {
  this.hash = {};
  this.list = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  
  if (this.hash[val] !== undefined) {
    return false;
  }
  this.hash[val] = this.list.length;
  this.list.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.hash[val] !== undefined) {
    let index = this.hash[val];
    let lastValue = this.list[this.list.length - 1];
    this.list[index] = lastValue;
    this.hash[lastValue] = index;
    this.list.pop();
    delete this.hash[val];
    return true;
  }
  
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.list.length);
  return this.list[randomIndex];
};


// Your RandomizedSet object will be instantiated and called as such:
var randomizedSet = new RandomizedSet();

console.log(randomizedSet.insert(1)); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomizedSet.remove(2)); // Returns false as 2 does not exist in the set.
console.log(randomizedSet.insert(2)); // Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomizedSet.getRandom()); // getRandom() should return either 1 or 2 randomly.
console.log(randomizedSet.insert(2)); // 2 was already in the set, so return false.
console.log(randomizedSet.insert(4)); // 2 was already in the set, so return false.
console.log(randomizedSet.insert(5)); // 2 was already in the set, so return false.
console.log(randomizedSet.getRandom()); // Since 2 is the only number in the set, getRandom() will always return 2.
