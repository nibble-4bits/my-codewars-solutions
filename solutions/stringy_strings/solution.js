function stringy(size) {
  return Array.from({ length: size }, (_, i) => i & 1 ? '0' : '1').join('');
}