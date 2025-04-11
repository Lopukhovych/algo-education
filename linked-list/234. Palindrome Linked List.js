/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import {arrayToLinkedList} from "./utils.js";

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  
  let start = head;
  let end = head;
  
  while(end?.next) {
    start = start.next;
    end = end.next.next;
  }
  let reversed = reverseList(start)
  while(reversed !== null) {
    if(head.val !== reversed.val) {
      return false;
    }
    head = head.next;
    reversed = reversed.next;
  }
  
  return true;
  
  function reverseList(head) {
    let prev = null;
    let curr = head;
    
    while(curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    
    return prev;
  }
};


//Test
const head = [1,2,2,1]; // true
// const head = [1,2]; //false
const head1 = arrayToLinkedList(head);
// tslint:disable-next-line:no-console
console.log('head1: ', head1); // eslint-disable-line no-console
// tslint:disable-next-line:no-console
console.log('isPalindrome: ', isPalindrome(head1)); // eslint-disable-line no-console
