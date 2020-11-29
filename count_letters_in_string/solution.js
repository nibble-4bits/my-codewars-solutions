function letterCount(s){
  let obj = {};
  
  [...s].forEach(letter => {
    if (letter in obj) obj[letter]++;
    else obj[letter] = 1;
  });
  
  return obj;
}