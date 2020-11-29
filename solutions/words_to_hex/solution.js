function wordsToHex(words) {
  return words.split(' ').map(word => `#${word[0] ? word[0].charCodeAt().toString(16) : '00' }${word[1] ? word[1].charCodeAt().toString(16) : '00' }${word[2] ? word[2].charCodeAt().toString(16) : '00' }`);
}