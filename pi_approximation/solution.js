function iterPi(epsilon) {
  let myPi = 0;
  let denom = 1;
  let sign = 1;
  let iter = 0;
  
  while (epsilon < Math.abs(Math.PI - myPi)) {
    myPi += 4 * (1 / denom) * sign;
    denom += 2;
    sign *= -1;
    iter++;
  }
  
  return [iter, parseFloat(myPi.toFixed(10))];
}