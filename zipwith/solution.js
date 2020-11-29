function zipWith(fn,a0,a1) {
  return new Array(Math.min(a0.length, a1.length)).fill(0).map((x, i) => fn(a0[i], a1[i]));
}