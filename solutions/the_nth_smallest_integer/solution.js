function nthSmallest(arr, n) {
  const nthSmallest = [...new Set(arr)].sort((a, b) => a - b)[n - 1];
  return nthSmallest !== undefined ? nthSmallest : null; 
}