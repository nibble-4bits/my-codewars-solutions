function encode(text) {
  let bits = '';
  
  for (const char of text) {
    bits += char.charCodeAt().toString(2).padStart(8, '0')
  }
  bits = bits.replace(/0/g, '000').replace(/1/g, '111');
  
  return bits;
}

function decode(bits) {
  let text = '';
  let currentChar;
  
  const chars = bits.match(/\d{24}/g);
  for (const char of chars) {
    currentChar = '';
    for (let i = 0; i < char.length; i += 3) {
      const bitSequence = char[i] + char[i + 1] + char[i + 2];
      currentChar += getMostCommonDigit(bitSequence);
    }
    text += String.fromCharCode(parseInt(currentChar, 2));
  }
    
  
  return text;
}

function getMostCommonDigit(bitSequence) {
  const lengthOfZero = (bitSequence.match(/0/g) || []).length;
  const lengthOfOne = (bitSequence.match(/1/g) || []).length;
  
  return lengthOfZero > lengthOfOne ? '0' : '1';
}