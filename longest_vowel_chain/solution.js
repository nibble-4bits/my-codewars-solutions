function solve(s) {
  return s.match(/[aeiou]+/ig).reduce((acc, x) => x.length > acc ? x.length : acc, 0);
}