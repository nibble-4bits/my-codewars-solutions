// This code works for any sudoku size

function doneOrNot(board) {
  for (let i = 0; i < board.length; i++) {
    if (!isRowValid(board, i) || !isColValid(board, i) || !isBoxValid(board, i)) return 'Try again!';
  }
  return 'Finished!';
}

function isRowValid(board, rowIndex) {
  const row = board[rowIndex];
  return new Set(row).size === board.length;
}

function isColValid(board, colIndex) {
  const col = [];
  for (let i = 0; i < board.length; i++) {
    col.push(board[i][colIndex]);
  }
  return new Set(col).size === board.length;
}

function isBoxValid(board, boxIndex) {
  const box = [];
  const boardLenSqrt = Math.sqrt(board.length);
  const rowStart = Math.floor(boxIndex / boardLenSqrt) * boardLenSqrt;
  const rowEnd = rowStart + boardLenSqrt;
  const colStart = (boxIndex % boardLenSqrt) * boardLenSqrt;
  const colEnd = colStart + boardLenSqrt;
  
  for (let i = rowStart; i < rowEnd; i++) {
    for (let j = colStart; j < colEnd; j++) {
      box.push(board[i][j]);
    }
  }
  
  return new Set(box).size === board.length;
}