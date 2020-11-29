function highestNumb(arr) {
  if (arr.length === 0) throw new Error();
  return Math.max(...arr);
}