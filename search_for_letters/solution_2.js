function change(string) {
  let arr = Array.from({ length: 26 }, _ => 0);
  
  for (const char of string) {
    if (/[A-Z]/.test(char)) arr[char.charCodeAt(0) - 'A'.charCodeAt(0)] = 1;
    else if (/[a-z]/.test(char)) arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
  }
  
  return arr.join('');
}