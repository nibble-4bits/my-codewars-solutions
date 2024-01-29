function reverseLetter(str) {
  return [...str].filter(c => /[a-z]/.test(c)).reverse().join('');
}