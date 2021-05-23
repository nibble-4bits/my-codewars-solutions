function tripleX(str) {
  const idx = str.indexOf('x');
  return str[idx + 1] === 'x' && str[idx + 2] === 'x';
}

