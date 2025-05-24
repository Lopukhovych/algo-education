import {arrayToBinaryTree} from "../trees_tries_dfs_bfs/treeToArray.js";

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode | null} root
 * @return {number}
 */
export default function binaryTreeMaximumDepth(root) {
  if(!root) return 0;
  
  let left = binaryTreeMaximumDepth(root.left);
  let right = binaryTreeMaximumDepth(root.right);
  
  return 1 + Math.max(left, right);
}

// Test
// const root = [1,2,3,4,5,6,7]; // 3
const root = [1,null,2]; // 2
// const root = [10,5,15,null,null,12,20]; //3
const head = arrayToBinaryTree(root);

// tslint:disable-next-line:no-console
console.log('binaryTreeMaximumDepth: ', binaryTreeMaximumDepth(head)); // eslint-disable-line no-console
