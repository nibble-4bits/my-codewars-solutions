function reverseByCenter(s){
  let newWord = '';
  
  if (s.length % 2 === 0) {
    newWord = s.slice(s.length / 2) + s.slice(0, s.length / 2);
  }
  else {
    newWord = s.slice(Math.floor(s.length / 2) + 1) + s[Math.floor(s.length / 2)] + s.slice(0, Math.floor(s.length / 2));
  }
  
  return newWord;
}