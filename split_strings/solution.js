function solution(str){
  let arr = [];
  let twoChars = '';
  str = str.length % 2 === 0 ? str : str + '_';
  
  for (let i = 0; i < str.length; i++) {
     if (i % 2 === 0) twoChars += str[i];
     else {
       twoChars += str[i];
       arr.push(twoChars);
       twoChars = '';
     }
  }
  
  return arr;
}