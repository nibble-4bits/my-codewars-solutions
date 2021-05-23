function findOdd(A) {
  let odd = 0;
  
  for (const num of A) {
    odd ^= num;
  }
  
  return odd;
}