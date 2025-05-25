/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if(n <= 2) {
    return Array(n).fill(0).map((_, index) => index);
  }
  
  let centroids = Array(n).fill(0).map((_, index) => new Set());
  for(let [from, to] of edges) {
    centroids[from].add(to);
    centroids[to].add(from);
  }
  
  let leaves = []
  centroids.forEach((edge, index) => {
    if(edge.size === 1) {
      leaves.push(index);
    }
  });
  
  let remain_leaves = n;
  
  while(remain_leaves > 2) {
    remain_leaves -= leaves.length;
    let newLeaves = [];
    while(leaves.length) {
      let leaf = leaves.pop();
      let neighbors = centroids[leaf];
      let neighbor = Array.from(neighbors)[0];
      
      centroids[neighbor].delete(leaf);
      if(centroids[neighbor].size === 1) {
        newLeaves.push(neighbor);
      }
    }
    
    leaves = newLeaves;
  }
  
  return leaves;
};

// const n = 4, edges = [[1,0],[1,2],[1,3]] //[1]
const n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]; // [3,4]


// tslint:disable-next-line:no-console
console.log('findMinHeightTrees: ', findMinHeightTrees(n, edges)); // eslint-disable-line no-console
