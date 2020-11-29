function solve(array) {
  return array.reduceRight((acc, v, i, arr) => !acc.includes(v) ? acc.concat(v) : acc, []).reverse();
}