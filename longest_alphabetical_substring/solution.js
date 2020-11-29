function longest(str) {
  const substrs = {};
  let tempStr = '';
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= str[i - 1]) {
      tempStr += str[i];
    } 
    else {
      if (substrs[tempStr.length]) substrs[tempStr.length].push(tempStr);
      else substrs[tempStr.length] = [tempStr];
      tempStr = str[i];
    }
    
    if (i === str.length - 1) {
      if (substrs[tempStr.length]) substrs[tempStr.length].push(tempStr);
      else substrs[tempStr.length] = [tempStr];   
    }
  }
  
  return substrs[Math.max(...Object.keys(substrs))][0];
}