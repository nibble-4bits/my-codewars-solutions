function duplicateCount(text){
  let dict = {};
  let duplicates = 0;
  
  for (let letter of text) {
    letter = letter.toLowerCase();
    if (letter in dict) dict[letter]++;
    else dict[letter] = 1;
  }
  
  for (const key in dict) {
    if (dict[key] > 1) {
      duplicates++;
    }
  }
  
  return duplicates;
}