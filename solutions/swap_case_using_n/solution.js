function swap(s, n) {
  const binaryLength = Math.ceil(Math.log2(n));
  const maxPower = binaryLength - 1;
  let skipped = 0;
  
  return s
    .split('')
    .map((c, i) => !/[a-z]/i.test(c) ? (skipped++, c) : (!(n & (1 << maxPower - (i - skipped) % binaryLength)) ? c : swapCase(c)))
    .join('');
}

function swapCase(c) {
  if (c === c.toUpperCase()) return c.toLowerCase();
  return c.toUpperCase();
}