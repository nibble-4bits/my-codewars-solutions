function calculate(num1,num2){
  return str2bin(num1) + str2bin(num2);
}

function str2bin(str) {
  let number = 0;
  
  for (let i = 0; i < str.length; i++) number += (str[i] - 0) * (2 ** (str.length - 1 - i));
  
  return number;
}
