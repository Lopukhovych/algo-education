import {arrayToBinaryTree} from "./treeToArray.js";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];
  
  function dfs(node, path, sum) {
    if (!node) return;
    let accSum = node.val + sum;
    if (accSum === targetSum && node.left === null && node.right === null) {
      result.push([...path, node.val]);
      return;
    }
    path.push(node.val);
    dfs(node.left, path, accSum);
    dfs(node.right, path, accSum);
    path.pop();
  }
  
  dfs(root, [], 0);
  
  return result;
};

const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1], targetSum = 22; // [[5,4,11,2],[5,8,4,5]]
// const root = [1,2,3], targetSum = 5; // []

const head = arrayToBinaryTree(root);
// tslint:disable-next-line:no-console
console.log('head: ', JSON.stringify(head, null, 2)); // eslint-disable-line no-console
// tslint:disable-next-line:no-console
console.log('pathSum: ', pathSum(head, targetSum)); // eslint-disable-line no-console
