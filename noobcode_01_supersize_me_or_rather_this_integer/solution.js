function superSize(num){
  return parseInt(num.toString().split('').sort((a, b) => parseInt(b) - parseInt(a)).join(''));
}