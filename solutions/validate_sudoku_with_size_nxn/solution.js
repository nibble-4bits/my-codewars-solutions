class Sudoku {
  constructor(board) {
    this.board = board;
    this.size = board.length;
  }

  isValid() {
    for (let i = 0; i < this.size; i++) {
      if (
        !this.isValidDimensions() ||
        !this.isValidRow(i) ||
        !this.isValidCol(i) ||
        !this.isValidBox(i)
      )
        return false;
    }

    return true;
  }

  isValidDimensions() {
    for (const row of this.board) {
      if (row.length !== this.size) return false;
    }

    return true;
  }

  isValidRow(row) {
    const set = new Set();

    for (let col = 0; col < this.size; col++) {
      if (typeof this.board[row][col] !== 'number') return false;
      if (this.board[row][col] < 1 || this.board[row][col] > this.size) return false;
      if (set.has(this.board[row][col])) return false;
      set.add(this.board[row][col]);
    }

    return true;
  }

  isValidCol(col) {
    const set = new Set();

    for (let row = 0; row < this.size; row++) {
      if (typeof this.board[row][col] !== 'number') return false;
      if (this.board[row][col] < 1 || this.board[row][col] > this.size) return false;
      if (set.has(this.board[row][col])) return false;
      set.add(this.board[row][col]);
    }

    return true;
  }

  isValidBox(box) {
    const set = new Set();
    const sizeSqrt = Math.sqrt(this.size);
    const rowStart = Math.trunc(box / sizeSqrt) * sizeSqrt;
    const rowEnd = rowStart + sizeSqrt;
    const colStart = (box * sizeSqrt) % this.size;
    const colEnd = colStart + sizeSqrt;

    for (let row = rowStart; row < rowEnd; row++) {
      for (let col = colStart; col < colEnd; col++) {
        if (typeof this.board[row][col] !== 'number') return false;
        if (this.board[row][col] < 1 || this.board[row][col] > this.size) return false;
        if (set.has(this.board[row][col])) return false;
        set.add(this.board[row][col]);
      }
    }

    return true;
  }
}
