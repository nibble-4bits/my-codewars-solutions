function digital_root(n) {
  if (n.toString().length === 1) return n;
  else {
    n = n.toString().split('').reduce((acc, i) => acc + parseInt(i), 0);
    return digital_root(n);
  }
}