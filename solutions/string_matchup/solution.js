function solve(a,b) {
  const map = new Map();
  const result = [];
  
  for (const strB of b) map.set(strB, 0);
  
  for (const strA of a) {
    if (map.has(strA)) map.set(strA, map.get(strA) + 1);
  }
  
  for (const strB of b) result.push(map.get(strB));
  
  return result;
}