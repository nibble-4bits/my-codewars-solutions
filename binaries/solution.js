function code(strng) {
  return strng.split('').map(n => {
    const binary = (+n).toString(2);
    const bits = binary.length;
    return `${'0'.repeat(bits - 1)}1${binary}`;
  }).join('');
}

function decode(str) {
  let decoded = '';
  
  while (str !== '') {
    const bits = str.slice(0, str.indexOf('1') + 1).length;
    const binary = str.slice(str.indexOf('1') + 1, str.indexOf('1') + bits + 1);
    decoded += parseInt(binary, 2);
    str = str.slice(str.indexOf('1') + bits + 1);
  }
  
  return decoded;
}