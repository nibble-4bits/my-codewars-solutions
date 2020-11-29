function lenR(x) {
  return x[0] ? 1 + lenR(x.slice(1)) : 0;
}