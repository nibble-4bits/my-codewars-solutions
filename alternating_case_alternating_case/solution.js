String.prototype.toAlternatingCase = function () {
  let newStr = '';
  
  for (const char of this) {
    if (char === char.toLowerCase()) newStr += char.toUpperCase();
    else newStr += char.toLowerCase();
  }
  
  return newStr;
}