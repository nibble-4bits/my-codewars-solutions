function decipherThis(str) {
  return str.split(' ').map(word => {
    let newWord = word.replace(/\d+/g, match => {
      return String.fromCharCode(match);
    });
    
    if (newWord.length > 2) {
      newWord = newWord[0] + 
                newWord[newWord.length - 1] + 
                newWord.slice(2, newWord.length - 1) + 
                newWord[1];
    }
    return newWord;
  }).join(' ');
}; 