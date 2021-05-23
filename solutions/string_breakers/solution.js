function stringBreakers(n, string) {
  const substrings = [];
  const stringWithoutSpaces = string.replace(/ /g, '');
  
  for (let i = 0; i < stringWithoutSpaces.length; i += n) {
    substrings.push(stringWithoutSpaces.slice(i, i + n));
  }
  
  return substrings.join('\n');
}