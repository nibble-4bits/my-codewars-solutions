function countSmileys(arr) {
  return arr.reduce((acc, n) => /[:;][-~]?[)D]/.test(n) ? acc + 1 : acc, 0);
}