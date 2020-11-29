function arrayPacking(a) {
  return parseInt(a.map(x => x.toString(2).padStart(8, '0')).reverse().join(''), 2);
}