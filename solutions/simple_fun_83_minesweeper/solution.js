function minesweeper(matrix) {
  let output = [];
  let currentMines = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    output.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      currentMines = 0;
      for (let m = i - 1; m < i - 1 + 3; m++) {
        for (let n = j - 1; n < j - 1 + 3; n++) {
          if (m < 0 || n < 0 || m >= matrix.length || n >= matrix[i].length || (m === i && n === j)) continue;
          if (matrix[m][n]) currentMines++;
        }
      }
      output[i].push(currentMines);
    }
  }
  
  return output;
}