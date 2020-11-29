function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((acc, x) => acc + x) + arr2.reduce((acc, x) => acc + x);
}