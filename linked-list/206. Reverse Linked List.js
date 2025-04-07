/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import {arrayToLinkedList} from "./utils.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) return null;
  if (head.next === null) return head;
  
  let node = head;
  let prev = null;
  
  while (node !== null) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  
  return prev;
};

const head = [1,2,3,4,5]; // [5,4,3,2,1]
const list = arrayToLinkedList(head);
// tslint:disable-next-line:no-console
// console.log('list: ', list); // eslint-disable-line no-console
// tslint:disable-next-line:no-console
console.log('reverseList: ', reverseList(list)); // eslint-disable-line no-console
