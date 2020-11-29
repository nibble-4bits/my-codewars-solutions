function addLetters(...letters) {
  return String.fromCharCode(((letters.map(x => x.charCodeAt() - 96).reduce((acc, i) => acc + i, 0) % 26) || 26) + 96);
}