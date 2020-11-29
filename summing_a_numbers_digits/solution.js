function sumDigits(number) {
  return number
          .toString()
          .replace(/\D/g, '')
          .split('')
          .reduce((acc, x) => parseInt(acc) + parseInt(x), 0);
}