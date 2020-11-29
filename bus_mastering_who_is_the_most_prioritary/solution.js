function arbitrate(input, n) {
  let idx = input.search('1');
  if (idx === -1) return '0'.padEnd(n, '0');
  return '1'.padStart(idx + 1, '0').padEnd(n, '0');
}