function bracesStatus(string) {
  let openingBraces = ['(','[','{'];
  let closingBraces = [')',']','}'];
  let stack = [];
  
  for (let i = 0; i < string.length; i++) {
    var currChar = string.charAt(i);
    if (openingBraces.includes(currChar)) {
      stack.push(currChar);
    }
    else if (closingBraces.includes(currChar)) {
      var poppedChar = stack.pop(currChar);
      if (openingBraces.indexOf(poppedChar) !== closingBraces.indexOf(currChar)) {
        return false;
      }
    }
  }
  
  return stack.length == 0;
}