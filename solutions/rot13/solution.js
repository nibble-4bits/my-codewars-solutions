function rot13(message) {
  let rot13Message = '';
  
  for (const char of message) {
    if (/[A-Za-z]/.test(char)) {
      if (char.charCodeAt() >= 65 && char.charCodeAt() <= 77) rot13Message += String.fromCharCode(char.charCodeAt() + 13);
      else if (char.charCodeAt() >= 78 && char.charCodeAt() <= 90) rot13Message += String.fromCharCode(char.charCodeAt() - 13);
      else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 109) rot13Message += String.fromCharCode(char.charCodeAt() + 13);
      else if (char.charCodeAt() >= 110 && char.charCodeAt() <= 122) rot13Message += String.fromCharCode(char.charCodeAt() - 13);
    }
    else rot13Message += char;
  }
  
  return rot13Message;
}