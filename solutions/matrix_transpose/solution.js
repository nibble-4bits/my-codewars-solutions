function transpose(matrix) {
  const output = [];

  for (let i = 0; i < matrix[0].length; i++) {
    output.push([]);
    for (let j = 0; j < matrix.length; j++) {
      const num = matrix[j][i];
      output[i].push(num);
    }
  }

  return output;
}