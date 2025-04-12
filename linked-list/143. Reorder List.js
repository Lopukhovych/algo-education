/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import {arrayToLinkedList, linkedListToArray} from "./utils.js";

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  const middle = getMiddle(head);
  const reversedSecond = middle.next;
  middle.next = null;
  let second = reverse(reversedSecond);
  let first = head;
  while(first !== null && second !== null) {
    let firstNext = first.next;
    let secondNext = second.next;
    first.next = second;
    second.next = firstNext;
    first = firstNext;
    second = secondNext;
  }
};

function getMiddle(head) {
  if(!head?.next) {
    return head
  }
  let slow = head;
  let fast = head.next;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  return slow;
}

function reverse(head) {
  let prev = null;
  while(head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// Test
// const head = [1,2,3,4]; //[1,4,2,3]
const head = [1,2,3,4,5]; // [1,5,2,4,3]

const head1 = arrayToLinkedList(head);
reorderList(head1)

// tslint:disable-next-line:no-console
console.log('reorderList: ', linkedListToArray(head1)); // eslint-disable-line no-console
