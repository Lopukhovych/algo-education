/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let rows = Array.from({length: 9}, () => new Set());
  let cols = Array.from({length: 9}, () => new Set());
  let boxes = Array.from({length: 9}, () => new Set());
  
  function getBoxIndex(i, j) {
    return Math.floor(i / 3) * 3 + Math.floor(j / 3);
  }
  
  function isValid(char, i, j) {
    if (rows[i].has(char)) return false;
    if (cols[j].has(char)) return false;
    if (boxes[getBoxIndex(i, j)].has(char)) return false;
    
    return true;
  }
  
  function placeChar(char, i, j) {
    rows[i].add(char);
    cols[j].add(char);
    boxes[getBoxIndex(i, j)].add(char);
    board[i][j] = char;
  }
  
  function removeNumber(char, i, j) {
    rows[i].delete(char);
    cols[j].delete(char);
    boxes[getBoxIndex(i, j)].delete(char);
    board[i][j] = '.';
  }
  
  
  function backtrack(i, j) {
    if (i === 9) return true;
    
    const nextI = j === 8 ? i + 1 : i;
    const nextJ = j === 8 ? 0 : j + 1;
    
    if (board[i][j] !== '.') {
      return backtrack(nextI, nextJ);
    }
    
    for (let k = 1; k < 10; k++) {
      const char = String(k);
      if (isValid(char, i, j)) {
        placeChar(char, i, j);
        if (backtrack(nextI, nextJ)) return true;
        removeNumber(char, i, j);
      }
    }
    
    return false;
  }
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        placeChar(board[i][j], i, j)
      }
    }
  }
  
  backtrack(0, 0);
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

const solution = [["5", "3", "4", "6", "7", "8", "9", "1", "2"], ["6", "7", "2", "1", "9", "5", "3", "4", "8"], ["1", "9", "8", "3", "4", "2", "5", "6", "7"], ["8", "5", "9", "7", "6", "1", "4", "2", "3"], ["4", "2", "6", "8", "5", "3", "7", "9", "1"], ["7", "1", "3", "9", "2", "4", "8", "5", "6"], ["9", "6", "1", "5", "3", "7", "2", "8", "4"], ["2", "8", "7", "4", "1", "9", "6", "3", "5"], ["3", "4", "5", "2", "8", "6", "1", "7", "9"]];

function compare(board1, board2) {
  let equal = true;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board1[i][j] !== board2[i][j]) return false;
    }
  }
  
  return true;
}

//Test
solveSudoku(board);
// tslint:disable-next-line:no-console
console.log('board: ', board); // eslint-disable-line no-console
console.log('solveSudoku: ', compare(board, solution)); // eslint-disable-line no-console



