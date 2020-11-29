function testit(s) {
  if (!s) return '';
  return s.split(' ').map(w => w.slice(0, w.length - 1) + w[w.length - 1].toUpperCase()).join(' ');
}