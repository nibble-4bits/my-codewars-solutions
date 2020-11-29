function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((acc, i) => acc + i, 0);
}