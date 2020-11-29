function parseF(s) {
  const val = parseFloat(s);
  return !isNaN(val) ? val : null;
}