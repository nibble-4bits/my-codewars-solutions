const charMap = {
  a: 1, e: 2, i: 3, o: 4, u: 5,
  1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u', 
};

function encode(string) {
  return string.split('').map(c => isVowel(c) ? charMap[c] : c).join('');
}

function decode(string) {
  return string.split('').map(c => !isNaN(c) ? charMap[c] : c).join('');
}

function isVowel(char) {
  const charCopy = char.toLowerCase();
  if (charCopy === 'a' || charCopy === 'e' || 
      charCopy === 'i' || charCopy === 'o' || charCopy === 'u') return true;
  return false;
}