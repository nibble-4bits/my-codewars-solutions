function hasUniqueChars(str) {
  const set = new Set();
  
  for (const char of str) {
    if (set.has(char)) return false;
    set.add(char);
  }
  
  return true;
}