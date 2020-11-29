function sumArray(array) {
  if (!array || array.length < 3) return 0;
  let hi = Math.max(...array), lo = Math.min(...array);
  return array.reduce((acc, x) => acc + x, 0) - hi - lo;
}