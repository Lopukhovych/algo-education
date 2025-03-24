/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = [];
  const columns = [];
  const boxes = {};
  
  for(let i =0; i< board.length; i++) {
    rows.push(new Set());
    columns.push(new Set());
  }
  
  for(let i =0 ; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] === '.') continue;
      
      let elem = board[i][j];
      
      const boxIndex = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;
      
      if(!boxes[boxIndex]) {
        boxes[boxIndex] = new Set();
      }
      if(rows[i].has(elem) || columns[j].has(elem) || boxes[boxIndex].has(elem)) {
        return false;
      }
      rows[i].add(elem);
      columns[j].add(elem);
      boxes[boxIndex].add(elem);
    }
  }
  
  return true;
};

//Test
const board =
  [["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]; // true

// const board =
//   [["8","3",".",".","7",".",".",".","."]
//     ,["6",".",".","1","9","5",".",".","."]
//     ,[".","9","8",".",".",".",".","6","."]
//     ,["8",".",".",".","6",".",".",".","3"]
//     ,["4",".",".","8",".","3",".",".","1"]
//     ,["7",".",".",".","2",".",".",".","6"]
//     ,[".","6",".",".",".",".","2","8","."]
//     ,[".",".",".","4","1","9",".",".","5"]
//     ,[".",".",".",".","8",".",".","7","9"]]; //false

// tslint:disable-next-line:no-console
console.log('isValidSudoku: ', isValidSudoku(board)); // eslint-disable-line no-console
