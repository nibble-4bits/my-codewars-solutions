function duplicateEncode(word) {
  let dict = {};
  let encodedStr = '';
  const wordCopy = word.toLowerCase();
  
  for (const char of wordCopy) {
    if (char in dict) dict[char]++;
    else dict[char] = 1;
  }
  
  for (const char of wordCopy) {
    encodedStr += dict[char] > 1 ? ')' : '(';
  }
  
  return encodedStr;
}
