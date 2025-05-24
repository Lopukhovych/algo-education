/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

function _Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
  if(!node) return null;
  
  const hash = {};
  
  function dfs(node) {
    const newNode = new _Node(node.val);
    hash[newNode.val] = newNode;
    
    for(let neighbor of node.neighbors) {
      if(hash[neighbor.val]) {
        newNode.neighbors.push(hash[neighbor.val])
      } else {
        dfs(neighbor);
        newNode.neighbors.push(hash[neighbor.val])
      }
    }
  }
  
  dfs(node);
  
  return hash[node.val];
};

import {arrayToGraph, graphToArray} from "./arrayToGraph.js";
// Test
// const adjList = [[2,4],[1,3],[2,4],[1,3]]; // [[2,4],[1,3],[2,4],[1,3]]
// const adjList = [[]]; // [[]]
const adjList = []; // []
const head = arrayToGraph(adjList);
// tslint:disable-next-line:no-console
// console.log('head: ', head); // eslint-disable-line no-console
const head1 = cloneGraph(head);
// tslint:disable-next-line:no-console
// console.log('cloneGraph: ', head1); // eslint-disable-line no-console
// tslint:disable-next-line:no-console
console.log('graphToArray: ', graphToArray(head1)); // eslint-disable-line no-console
