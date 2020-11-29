function isIntArray(arr) {
  if (!arr) return false;
  return arr.every(x => Number.isInteger(x));
}