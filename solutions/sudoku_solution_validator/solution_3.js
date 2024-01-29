function isValidRow(board, row) {
  const seen = Array.from({ length: 9 }, () => false);

  for (let col = 0; col < 9; col++) {
    if (board[row][col] === 0 || seen[board[row][col] - 1]) return false;
    seen[board[row][col] - 1] = true;
  }

  return true;
}

function isValidCol(board, col) {
  const seen = Array.from({ length: 9 }, () => false);

  for (let row = 0; row < 9; row++) {
    if (board[row][col] === 0 || seen[board[row][col] - 1]) return false;
    seen[board[row][col] - 1] = true;
  }

  return true;
}

function isValidBox(board, box) {
  const seen = Array.from({ length: 9 }, () => false);
  const rowStart = Math.trunc(box / 3) * 3;
  const rowEnd = rowStart + 3;
  const colStart = (box * 3) % 9;
  const colEnd = colStart + 3;

  for (let row = rowStart; row < rowEnd; row++) {
    for (let col = colStart; col < colEnd; col++) {
      if (board[row][col] === 0 || seen[board[row][col] - 1]) return false;
      seen[board[row][col] - 1] = true;
    }
  }

  return true;
}

function validSolution(board) {
  for (let i = 0; i < 9; i++) {
    if (!isValidRow(board, i) || !isValidCol(board, i) || !isValidBox(board, i)) return false;
  }

  return true;
}
