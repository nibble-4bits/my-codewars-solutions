function isIsogram(str){
  str = str.toLowerCase();
  let usedLetters = [];
  
  for (const c of str) {
    if (usedLetters.indexOf(c) > -1) return false
    usedLetters.push(c);
  }
  
  return true;
}