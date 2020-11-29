function firstNonRepeatingLetter(s) {
  const map = new Map();
  
  for (const c of s) {
    if (map.has(c.toLowerCase()) || map.has(c.toUpperCase())) {
      const found = map.has(c.toLowerCase()) ? c.toLowerCase() : c.toUpperCase();
      map.set(found, map.get(found) + 1);
    } 
    else map.set(c, 1);
  }
  
  for (const entry of map) {
    const key = entry[0];
    const value = entry[1];
    if (value === 1) return key; 
  }
  
  return '';
}