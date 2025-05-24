/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  let R = image.length;
  let C = image[0].length;
  const oldColor = image[sr][sc];
  
  if(oldColor === color) return image;
  
  function dfs(r, c){
    if(image[r][c] === oldColor) {
      image[r][c] = color;
      if( r > 0) {
        dfs(r - 1, c);
      }
      if(r + 1 < R) {
        dfs(r + 1, c)
      }
      if(c > 0) {
        dfs(r, c - 1);
      }
      if(c + 1 < C) {
        dfs(r, c + 1)
      }
    }
  }
  
  dfs(sr, sc);
  return image;
};

// Test

// const image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2;
// [[2,2,2],[2,2,0],[2,0,1]]
// const image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0;
// [[0,0,0],[0,0,0]]
const image = [[0,1,0, 1],[0,1,1, 0], [1,1,0,0], [0,1,1,0]], sr = 2, sc = 0, color = 2;


// tslint:disable-next-line:no-console
console.log('floodFill: ', floodFill(image, sr, sc, color)); // eslint-disable-line no-console
