function countingValleys(s) {
  let level = 0;
  let valleys = 0;
  
  for (const letter of s) {
    if (level === -1 && letter === 'U') valleys++;
    
    if (letter === 'U') level++;
    else if (letter === 'D') level--;
  }
  
  return valleys;
}