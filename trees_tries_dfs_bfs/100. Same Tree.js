/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {arrayToBinaryTree} from "./treeToArray.js";

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  
  if (p.val !== q.val) return false;
  
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// const p = [1, 2, 3], q = [1, 2, 3];
const p = [1, 2, 1], q = [1, 1, 2];

const left = arrayToBinaryTree(p);
// tslint:disable-next-line:no-console
console.log('left: ', left); // eslint-disable-line no-console
const right = arrayToBinaryTree(q);
//
// tslint:disable-next-line:no-console
console.log('isSameTree: ', isSameTree(left, right)); // eslint-disable-line no-console
