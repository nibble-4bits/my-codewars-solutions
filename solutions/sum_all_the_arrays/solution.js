function arraySum(arr) {
  if (!arr.length) return 0;
  else if (!Array.isArray(arr[0]) && isNaN(arr[0])) return arraySum(arr.slice(1));
  else if (Array.isArray(arr[0])) return arraySum(arr[0]);
  else return arr[0] + arraySum(arr.slice(1));
}