function longestWord(str) {
  return str.split(' ').reduce((acc, c) => c.length >= acc.length ? c : acc);
}