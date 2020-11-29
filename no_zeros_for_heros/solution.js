function noBoringZeros(n) {
  return n.toString() === '0' ? 0 : +n.toString().replace(/0+$/g, '');
}