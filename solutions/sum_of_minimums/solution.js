function sumOfMinimums(arrs) {
  let minSum = 0;
  
  for (const arr of arrs) {
    minSum += Math.min(...arr);
  }
  
  return minSum;
}