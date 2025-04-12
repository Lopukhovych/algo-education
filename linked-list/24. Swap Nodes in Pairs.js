/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

import {arrayToLinkedList, linkedListToArray} from "./utils.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(!head?.next) return head;
  let dummy = new ListNode(undefined, head);
  let node = head;
  let swapNode = head.next;
  let prev = dummy;
  
  while(swapNode) {
    let next = swapNode.next;
    prev.next = swapNode;
    swapNode.next = node;
    node.next = next;
    prev = node;
    node = next;
    swapNode = next?.next;
  }
  
  return dummy.next;
};

//Test

const head = [1,2,3,4]; // [2,1,4,3]
// const head = []; // []
// const head = [1, 2];

const head1 = arrayToLinkedList(head);
// tslint:disable-next-line:no-console
console.log('swapPairs: ', linkedListToArray(swapPairs(head1))); // eslint-disable-line no-console


