/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const columns = board[0].length;
  const steps = [[1, 0], [-1, 0], [0, -1], [0, 1]];
  
  function dfs(index, row, column) {
    if (index === word.length) {
      return true;
    }
    
    if (row < 0 || column < 0 || row >= rows || column >= columns || board[row][column] !== word[index]) {
      return false;
    }
    
    let temp = board[row][column];
    board[row][column] = '#';
    for (let [x, y] of steps) {
      const newRow = row + x;
      const newColumn = column + y;
      if (dfs(index + 1, newRow, newColumn)) {
        return true;
      }
    }
    board[row][column] = temp;
  }
  
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (dfs(0, row, column)) {
        return true;
      }
    }
  }
  
  return false;
};


//Test
// const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"; //true
// const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"; // true
// const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCB"; // false
// const board = [["a"]], word = 'a'; // true
// const board = [["a","a"]], word = 'aaa'; // false
// tslint:disable-next-line:no-console
console.log('exist: ', exist(board, word)); // eslint-disable-line no-console
