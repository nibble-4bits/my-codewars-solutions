function letterFrequency(text){
  let freqDict = {};
  
  text.replace(/[^a-z]/ig, '').toLowerCase().split('').forEach(char => {
    if (char in freqDict) freqDict[char]++;
    else freqDict[char] = 1;
  });
  
  return Object.entries(freqDict).sort((a, b) => (b[1] - a[1]) || (a[0].charCodeAt() - b[0].charCodeAt()) );
}