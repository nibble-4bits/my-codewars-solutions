function squareSum(numbers){
  return numbers.reduce((acc, i) => acc + i ** 2, 0);
}