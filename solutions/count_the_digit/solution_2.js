function nbDig(n, d) {
  return Array.from({length: n + 1}, (v, i) => i ** 2).join('').match(new RegExp(`${d}`, 'g')).length;
}