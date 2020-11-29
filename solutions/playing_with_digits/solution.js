function digPow(n, p){
  const k = [...n.toString()].reduce((acc, x, i) => acc + x ** (p + i), 0) / n;
  return Number.isInteger(k) ? k : -1;
}