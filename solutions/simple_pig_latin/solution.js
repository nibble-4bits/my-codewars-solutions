function pigIt(str) {
  return str
          .split(' ')
          .map(word => /\w+/g.test(word) ? `${word.slice(1)}${word[0]}ay` : word)
          .join(' ');
}