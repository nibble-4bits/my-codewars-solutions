decodeMorse = function(morseCode) {
  const words = morseCode.split(/ {3,}/g);
  let decoded = '';
  
  for (const word of words) {
    const chars = word.split(/ /g);
    for (const char of chars) {
      decoded += MORSE_CODE[char] || '';
    }
    decoded += ' ';
  }
  
  return decoded.trim();
}