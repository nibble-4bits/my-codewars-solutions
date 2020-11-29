function countLettersAndDigits(input) {
  return input.split('').reduce((acc, x) => /[a-z0-9]/i.test(x) ? acc + 1 : acc, 0);
}