function counterEffect(hitCount) {
  let out = [];
  
  for (const digit of hitCount) {
    out.push(Array.from({ length: parseInt(digit) + 1 }, (_, i) => i));
  }
  
  return out;
}