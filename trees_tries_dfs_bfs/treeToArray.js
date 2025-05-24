function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

export function treeToArray(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const node = queue.shift();
    
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  
  // Trim trailing nulls
  while (result[result.length - 1] === null) {
    result.pop();
  }
  
  return result;
}

export function arrayToBinaryTree(array) {
  if (!array?.length) return null;
  const root = new TreeNode(array[0]);
  let nodeList = new Array(array.length);
  nodeList[0] = root;
  
  
  for (let i = 0; i < array.length; i++) {
    let leftId = 2 * i + 1;
    let rightId = 2 * i + 2;
    let node = nodeList[i];
    
    if (leftId < array.length) {
      let left = new TreeNode(array[leftId]);
      node.left = left;
      nodeList[leftId] = left;
    }
    
    if (rightId < array.length) {
      let right = new TreeNode(array[rightId]);
      node.right = right;
      nodeList[rightId] = right;
    }
  }
  
  return root;
}

export function isEqual(a, b) {
  // tslint:disable-next-line:no-console
  console.log('a: ', a, b); // eslint-disable-line no-console
  if (a.length !== b.length) return false;
  
  for(let i = 0; i< a.length; i++) {
    if(a[i] !== b[i]) return false;
  }
  
  return true;
}
