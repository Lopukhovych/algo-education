/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {arrayToBinaryTree} from "./treeToArray.js";

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  function dfs(node, sum) {
    if(!node) return false;
    let accSum = sum + node.val;
    if(accSum === targetSum && node.left === null && node.right === null) return true;
    
    return dfs(node.left, accSum) || dfs(node.right, accSum);
  }
  
  return dfs(root, 0)
};


// const root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22; // true
const root = [1,2,3], targetSum = 5; // false
// const root = [1,2], targetSum = 1; // false
const head = arrayToBinaryTree(root);
// tslint:disable-next-line:no-console
console.log('hasPathSum: ', hasPathSum(head, targetSum)); // eslint-disable-line no-console

