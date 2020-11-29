function maxMultiple(divisor, bound){
  let maxMult = divisor;
  
  while (maxMult + divisor <= bound) {
    maxMult += divisor;
  }
  
  return maxMult;
}