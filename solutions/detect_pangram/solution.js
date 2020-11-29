function isPangram(string){
  return new Set(string.replace(/[^a-z]/gi, '').toLowerCase()).size === 26;
}