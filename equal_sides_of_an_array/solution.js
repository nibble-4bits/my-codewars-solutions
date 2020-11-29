function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((acc, x) => acc + x) - arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if (leftSum === rightSum) return i;
    leftSum += arr[i];
    rightSum -= arr[i + 1];
  }
  
  return -1;
}