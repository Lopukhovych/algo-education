export function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

export function arrayToLinkedList(array) {
  if(!array.length) return null;
  let head = new ListNode(array[0]);
  let curr = head;
  for(let i = 1; i < array.length; i++) {
    let node = new ListNode(array[i]);
    curr.next = node;
    curr = node;
  }
  return head;
}

export function linkedListToArray(head) {
  if(!head) return [];
  let array = [head.val];
  let curr = head.next;
  while(curr !== null) {
    array.push(curr.val);
    curr = curr.next;
  }
  
  return array;
  // if(!array.length) return null;
  // let head = new ListNode(array[0]);
  // let curr = head;
  // for(let i = 1; i < array.length; i++) {
  //   let node = new ListNode(array[i]);
  //   curr.next = node;
  //   curr = node;
  // }
  // return head;
}
