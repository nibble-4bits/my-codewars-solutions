function XO(str) {
  let exes = 0, ohs = 0;
  
  for (const char of str) {
    switch(char) {
      case 'O':
      case 'o':
        ohs++;
        break;
      case 'X':
      case 'x':
        exes++;
        break;
    }
  }
  
  return exes === ohs;
}