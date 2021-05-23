function stray(numbers) {
  return numbers.reduce((acc, n) => acc ^ n);
}