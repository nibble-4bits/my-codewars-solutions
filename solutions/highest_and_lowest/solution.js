function highAndLow(numbers) {
  const numArr = numbers.split(' ').map(Number);
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}