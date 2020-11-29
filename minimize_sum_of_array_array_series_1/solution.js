function minSum(arr) {
  if (!arr.length) return 0;
  else {
    let max = Math.max(...arr);
    let min = Math.min(...arr)
    arr.splice(arr.indexOf(max), 1);
    arr.splice(arr.indexOf(min), 1);
    return max * min + minSum(arr);
  }
}