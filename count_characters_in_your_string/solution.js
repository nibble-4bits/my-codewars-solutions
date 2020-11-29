function count (string) {  
  const map = {};
  
  for (const char of string) map[char] =  ++map[char] || 1; 
  
  return map;
}