const combinations = {
  RR: 'R',
  RG: 'B',
  RB: 'G',
  GR: 'B',
  GG: 'G',
  GB: 'R',
  BR: 'G',
  BG: 'R',
  BB: 'B',
}

function triangle(row) {
  if (row.length === 1) return row;
  else {
    let nextRow = '';
    for (let i = 0; i < row.length - 1; i++) {
      nextRow += combinations[`${row[i]}${row[i + 1]}`];
    }
    return triangle(nextRow);
  }
}