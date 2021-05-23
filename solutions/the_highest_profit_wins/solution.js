function minMax(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  return [sorted[0], sorted[sorted.length - 1]];
}