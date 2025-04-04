var TimeMap = function () {
  this.hashTable = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!(key in this.hashTable)) {
    this.hashTable[key] = Array();
  }
  
  this.hashTable[key].push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!(key in this.hashTable)) {
    return "";
  }
  
  let list = this.hashTable[key];
  
  if (timestamp < list[0][0]) {
    return "";
  }
  
  if (timestamp > list[list.length - 1][0]) {
    return list[list.length - 1][1];
  }
  
  let left = 0;
  let right = list.length - 1;
  let result = "";
  
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let [time, value] = list[middle];
    if (time === timestamp) {
      return value;
    }
    
    if (time <= timestamp) {
      left = middle + 1;
      result = value;
    } else {
      right = middle - 1;
    }
  }
  return result;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

//Test
let timeMap = new TimeMap()
timeMap.set("foo", "bar", 1);
// tslint:disable-next-line:no-console
console.log(timeMap.get("foo", 1)); // bar // eslint-disable-line no-console
console.log(timeMap.get("foo", 3)); // bar // eslint-disable-line no-console
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4)); // bar2 // eslint-disable-line no-console
console.log(timeMap.get("foo", 5)); // bar2 // eslint-disable-line no-console
console.log(timeMap.get("foo", 3)); // bar // eslint-disable-line no-console

// tslint:disable-next-line:no-console
// console.log('timeMap: ', timeMap, timeMap.hashTable.foo.times); // eslint-disable-line no-console
