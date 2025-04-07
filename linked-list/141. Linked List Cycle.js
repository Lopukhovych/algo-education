/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

import {arrayToLinkedList} from "./utils.js";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let left = head;
  let right = head;
  
  while (right?.next?.next) {
    left = left.next;
    right = right.next.next;
    if (left === right) {
      return true;
    }
  }
  
  return false;
};

// Test
// const head = [3,2,0,-4], pos = 1;
// const head = [1,2], pos = 0;
const head = [1], pos = -1;

const head1 = arrayToLinkedList(head);
// tslint:disable-next-line:no-console
// console.log('head1_0: ', head1); // eslint-disable-line no-console
if (pos > -1) {
  let curr = head1;
  let posElem
  let index = 0
  
  while (curr !== null && curr?.next !== null) {
    if (index === pos) {
      posElem = curr;
    }
    index++;
    curr = curr.next;
  }
  curr.next = posElem;
  // tslint:disable-next-line:no-console
  // console.log('curr: ', curr); // eslint-disable-line no-console
}
// tslint:disable-next-line:no-console
// console.log('head1: ', head1); // eslint-disable-line no-console

// tslint:disable-next-line:no-console
console.log('hasCycle: ', hasCycle(head1)); // eslint-disable-line no-console

