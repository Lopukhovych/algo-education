/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import {arrayToLinkedList, linkedListToArray, ListNode} from "./utils.js";

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if(list1 === null) return list2;
  if(list2 === null) return list1;
  let head = new ListNode();
  let tail = head;
  
  
  while(list1 !== null && list2 !== null) {
    if(list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    
    tail = tail.next;
  }
  
  if(list1 !== null) {
    tail.next = list1;
  } else {
    tail.next = list2;
  }
  
  return head.next;
};

// Test
// const list1 = [1,2,4], list2 = [1,3,4]; //[1,1,2,3,4,4]
// const list1 = [], list2 = []; // []
const list1 = [], list2 = [0]; // [0]

const head1 = arrayToLinkedList(list1);
const head2 = arrayToLinkedList(list2);
let result = mergeTwoLists(head1, head2);

// tslint:disable-next-line:no-console
console.log('mergeTwoLists: ', linkedListToArray(result)); // eslint-disable-line no-console
