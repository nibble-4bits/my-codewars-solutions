function primeFactors(n){
  let factors = {};
  let primeStr = '';
  let currentFactor = 2;
  
  while (n > 1) {
    if (n % currentFactor === 0) {
      if (currentFactor in factors) {
        factors[currentFactor]++;
      }
      else {
        factors[currentFactor] = 1;
      }
      n /= currentFactor;
    }
    else {
      currentFactor++;
    }
  }
  
  for (const factor in factors) {
    primeStr += `(${factor}${factors[factor] > 1 ? `**${factors[factor]}` : ''})`;
  }
  
  return primeStr;
}