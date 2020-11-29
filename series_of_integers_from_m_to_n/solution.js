function generateIntegers(m, n) {
  return Array.from({length: n + 1 - m}, (v, i) => i + m);
}