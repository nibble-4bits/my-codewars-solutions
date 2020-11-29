function sample(coin) {
  let heads = 0;
  let numThrows = 25000;
  
  for (let i = 0; i < numThrows; i++) {
    if (coin()) heads++;
  }
  
  return heads / numThrows;
}