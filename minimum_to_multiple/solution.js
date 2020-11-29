function minimum(a, x) {
  if (a === x) return 0;
  
  let division = Math.round(a / x);
  let minMultiple = Math.abs(a - (x * division));
  
  return minMultiple;
}