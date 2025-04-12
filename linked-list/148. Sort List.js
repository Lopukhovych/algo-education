import {arrayToLinkedList, linkedListToArray} from "./utils.js";
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  
  let mid = findMid(head);
  let right = mid.next;
  mid.next = null;
  let left = head;
  
  // Recursively sort the two halves
  left = sortList(left);
  right = sortList(right);
  // Merge the sorted halves
  return merge(left, right);
};

function merge(list1, list2) {
  let dummy = new ListNode(-1);
  let temp = dummy;
  // Merge the two lists in sorted order
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      temp.next = list1;
      temp = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      temp = list2;
      list2 = list2.next;
    }
  }
  // Attach the remaining elements
  if (list1 !== null) temp.next = list1;
  if (list2 !== null) temp.next = list2;
  
  return dummy.next;
}

function findMid(head) {
  let slow = head;
  let fast = head.next;
  // Fast moves twice as fast as slow
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

//Test
// const head = [4,2,1,3]; // [1,2,3,4]
const head = [-1,5,3,4,0]; //[-1,0,3,4,5]

const head1 = arrayToLinkedList(head);

// tslint:disable-next-line:no-console
console.log('sortList: ', linkedListToArray(sortList(head1))); // eslint-disable-line no-console
