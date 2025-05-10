/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {arrayToTree} from "./treeToArray.js";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return isMirror(root.left, root.right);
};

var isMirror = (left, right) => {
  if (left == null && right == null) return true;
  if (left == null || right == null) return false;
  
  if (left.val !== right.val) return false;
  
  return isMirror(left.right, right.left) && isMirror(left.left, right.right);
}

// const root = [1, 2, 2, 3, 4, 4, 3];
const root = [1,2,2,null,3,null,3];

const node = arrayToTree(root);
// tslint:disable-next-line:no-console
console.log('isSymmetric: ', isSymmetric(node)); // eslint-disable-line no-console
