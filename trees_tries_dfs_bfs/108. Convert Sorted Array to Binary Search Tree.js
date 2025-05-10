/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let left = 0, right = nums.length - 1;
  
  function getRoot(left, right) {
    if (left > right) return null;
    let middle = Math.ceil((left + right) / 2);
    let root = new TreeNode(nums[middle]);
    root.left = getRoot(left, middle - 1);
    root.right = getRoot(middle + 1, right);
    return root;
  }
  
  return getRoot(left, right)
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// Test
const nums = [-10, -3, 0, 5, 9]; // [0,-3,9,-10,null,5] or [0,-10,5,null,-3,null,9]

const treeToArrayInorder = (treeNode) => {
  function walk(node, path) {
    if (node === null) return path;
    
    path.push(node.val);
    walk(node.left, path);
    walk(node.right, path);
    
    return path;
  }
  
  return walk(treeNode, []);
}

function preorderTraversal (root) {
  return walk(root, []);
  
  function walk(node, path) {
    if(!node) {
      return path;
    }
    
    path.push(node.val);
    
    walk(node.left, path);
    walk(node.right, path);
    
    return path;
  }
};

const treeToArrayPreorder = (treeNode) => {
  function walk(node, path) {
    if (node === null) return path;
    
    path.push(node.val);
    walk(node.left, path);
    walk(node.right, path);
    
    return path;
  }
  
  return walk(treeNode, []);
}

const node = sortedArrayToBST(nums);
// tslint:disable-next-line:no-console
console.log('sortedArrayToBST: ', node, treeToArrayPreorder(node), treeToArray(node)); // eslint-disable-line no-console




