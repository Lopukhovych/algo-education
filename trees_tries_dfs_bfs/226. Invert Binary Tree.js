/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {treeToArray, isEqual, arrayToBinaryTree} from "./treeToArray.js";

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root) return null;
  let curr = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(curr);
  
  return root;
};

// const root = [4,2,7,1,3,6,9], result = [4,7,2,9,6,3,1];
const root = [2,1,3], result = [2,3,1];

const node = arrayToBinaryTree(root);
// tslint:disable-next-line:no-console
// console.log('node: ', node, invertTree(node)); // eslint-disable-line no-console
// tslint:disable-next-line:no-console
// console.log('arra: ', treeToArray(invertTree(node)), result); // eslint-disable-line no-console

// tslint:disable-next-line:no-console
console.log('isEqual: ', isEqual(result, treeToArray(invertTree(node)))); // eslint-disable-line no-console
