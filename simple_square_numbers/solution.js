function solve(n){
  let N = 1, i = 2;
  while (!isPerfectSquare(n + N)) {
    N = i++ ** 2;
    if (N > 4503599627370495) return -1;
  }
  return N;
}

function isPerfectSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}