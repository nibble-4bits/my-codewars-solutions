var float2bin = function(input) {
  let inputCopy = parseFloat(input);
  let sign = input >= 0 ? 0 : 1;
  let exponent = 127 + Math.floor(Math.log2(Math.abs(inputCopy)));
  let fraction = Math.abs(inputCopy).toString(2).replace('.', '');
  fraction = fraction.slice(fraction.indexOf('1') + 1, fraction.indexOf('1') + 23).padEnd(23, '0')
  
  return `${sign}${exponent.toString(2).padStart(8, '0')}${fraction}`
}