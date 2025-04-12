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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if(!head?.next) {
    return head;
  }
  let odd = head;
  let even = head.next;
  let tempEven = even;
  while(tempEven?.next) {
    let nextOdd = tempEven.next;
    let nextEven = nextOdd.next;
    odd.next = nextOdd;
    tempEven.next = nextEven;
    
    odd = odd.next;
    tempEven = tempEven.next;
  }
  
  odd.next = even;
  
  return head;
};


//Test
// const head = [1,2,3,4,5]; // [1,3,5,2,4]
const head = [2,1,3,5,6,4,7] // [2,3,6,7,1,5,4]

const head1 = arrayToLinkedList(head);
// tslint:disable-next-line:no-console
console.log('oddEvenList: ', linkedListToArray(oddEvenList(head1))); // eslint-disable-line no-console
