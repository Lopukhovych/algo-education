/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import {arrayToLinkedList, linkedListToArray} from "./utils.js";

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let prev = new ListNode(0);
  prev.next = head;
  let right = prev;
  let left = prev;
  
  for (let i = 1; i <= n + 1; i++) {
    right = right.next;
  }
  
  while (right !== null) {
    right = right.next;
    left = left.next;
  }
  
  left.next = left.next.next;
  return prev.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

//Test
// const head = [1,2,3,4,5], n = 2; //[1,2,3,5]
// const head = [1], n = 1; // []
const head = [1,2], n = 2 //[1]

const head1 = arrayToLinkedList(head);
// tslint:disable-next-line:no-console
console.log('removeNthFromEnd: ', linkedListToArray(removeNthFromEnd(head1, n))); // eslint-disable-line no-console
