function solve(arr) {
  const matching = new Map();
  
  for (const num of arr) {
    if (matching.has(-num)) matching.set(-num, true);
    else matching.set(num, false);
  }
  
  for (const [key, val] of matching.entries()) {
    if (!val) return key;
  }
  
  return -1;
};