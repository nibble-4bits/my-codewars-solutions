function countBy(x, n) {
  return new Array(n).fill(x).map((v, i) => v * (i + 1));
}