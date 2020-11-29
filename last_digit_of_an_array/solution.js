function lastDigit(arr) {
  const numbersArr = arr.filter(e => typeof e === 'number' && Number.isInteger(e));
  if (numbersArr.length === 0) return 'No integers found.';
  return +numbersArr[numbersArr.length - 1].toString().slice(-1);
}