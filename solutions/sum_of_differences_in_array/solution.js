function sumOfDifferences(arr) {
  return arr.sort((a,b) => b - a).reduce((total, currVal, idx) => {
    if (idx === arr.length - 1) return total;
    else return total + (currVal - arr[idx + 1]);
  }, 0);
}