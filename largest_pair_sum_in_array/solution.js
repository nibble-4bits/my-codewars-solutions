function largestPairSum(numbers) {
  const max = Math.max(...numbers);
  numbers.splice(numbers.findIndex(n => n === max), 1);
  return Math.max(...numbers) + max;
}