function add(a, b) {
  a = a !== '' ? a : '0';
  b = b !== '' ? b : '0';
  
  a = a.padStart(200, '0');
  b = b.padStart(200, '0');
  
  let digitsArr = [];
  let carry = 0;
  let digit = 0;
  let sum = 0;
  
  for (let i = a.length - 1; i >= 0; i--) {
    sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    digit = sum % 10;
    carry = Math.trunc(sum / 10);
    digitsArr.unshift(digit);
  }
  
  return digitsArr.join('').replace(/^0+/, '');
}