function _Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

export function arrayToGraph(list) {
  const hash = {};
  for (let i = 0; i < list.length; i++) {
    let node;
    let index = i + 1;
    if (hash[index]) {
      node = hash[index];
    } else {
      node = new _Node(index);
      hash[index] = node;
    }
    
    const neighbors = list[i];
    for (let neighbor of neighbors) {
      if (!hash[neighbor]) {
        hash[neighbor] = new _Node(neighbor);
      }
      node.neighbors.push(hash[neighbor]);
    }
  }
  return hash[1];
}

export function graphToArray(head) {
  if(!head) return [];
  let hash = {}
  
  function dfs(node) {
    if(hash[node.val]) return;
    let values = []
    node.neighbors.forEach((neighbor) => {
      values.push(neighbor.val);
    });
    
    hash[node.val] = values;
    
    node.neighbors.forEach((neighbor) => {
      dfs(neighbor);
    });
  }
  
  dfs(head);
  
  let max = Math.max(...Object.keys(hash).map(item => +item));
  const result = new Array(max).fill(null);
  Object.keys(hash).map((item) => {
    result[item - 1] = hash[item];
  })
  
  return result;
}
