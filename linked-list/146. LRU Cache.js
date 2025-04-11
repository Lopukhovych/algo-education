function ListNode(key, val, next = null, prev = null) {
  this.key = key;
  this.val = val;
  this.next = next;
  this.prev = prev;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.hash = new Map();
  this.top = null;
  this.bottom = null;
};

LRUCache.prototype.find = function (key) {
  if (!this.hash.has(key)) {
    return null;
  }
  let node = this.hash.get(key);
  let prev = node.prev;
  if (prev) {
    if(this.bottom === node) {
      this.bottom = prev;
    }
    let next = node.next;
    prev.next = next;
    if (next) {
      next.prev = prev;
    }
    node.prev = null;
    node.next = null;
    
    let temp = this.top;
    this.top = node;
    node.next = temp;
    temp.prev = node;
  }
  return node;
}
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let node = this.find(key);
  if(node === null) {
    return -1;
  }
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let searchNode = this.find(key)
  if(searchNode) {
    searchNode.val = value;
  } else {
    const node = new ListNode(key, value);
    this.hash.set(key, node);
    if (this.top === null) {
      this.top = node;
      this.bottom = node;
      return;
    }
    let temp = this.top;
    this.top = node;
    node.next = temp;
    temp.prev = node;
  }
  
  if (this.hash.size > this.capacity) {
    const delNode = this.bottom;
    this.bottom = this.bottom.prev;
    this.bottom.next = null;
    this.hash.delete(delNode.key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


//Test

lRUCache = new LRUCache(2);
lRUCache.put(2, 1); // cache is {1=1}
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 3); // cache is {1=1}
lRUCache.put(4, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// tslint:disable-next-line:no-console
// console.log('lRUCache: ', lRUCache); // eslint-disable-line no-console
// console.log(lRUCache.get(1));    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log('lRUCache: ', lRUCache); // eslint-disable-line no-console
// console.log('lRUCache: ', lRUCache); // eslint-disable-line no-console
// console.log('lRUCache: ', lRUCache); // eslint-disable-line no-console
// console.log(lRUCache.get(2));    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(1));    // return 3
console.log(lRUCache.get(2));    // return 4
