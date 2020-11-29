function between(a, b) {
  return new Array(b + 1 - a).fill().map((_, i) => i + a);
}