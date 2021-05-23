function checkParity(parity, bin) {
  const bits = (bin.match(/1/g) || []).length;
  if (parity === 'odd' && (bits & 1) === 1) return 0;
  else if (parity === 'even' && (bits & 1) === 0) return 0;
  else return 1;
}