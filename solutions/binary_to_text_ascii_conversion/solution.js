function binaryToString(binary) {
  let text = '';
  
  for (let i = 0; i < binary.length; i += 8) {
    text += String.fromCharCode(parseInt(binary.slice(i, i + 8), 2));
  }
  
  return text;
}