function scramble(str1, str2) {
  let availableChars = {};
  
  for (const char of str1) {
    availableChars[char] = ++availableChars[char] || 1;
  }
  
  for (const char of str2) {
    if (!availableChars[char]) return false;
    else availableChars[char]--;
  }
  
  return true;
}
