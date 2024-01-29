function sortVowels(s) {
  if (typeof s !== 'string') return '';
  
  return [...s].map(c => ['a', 'e', 'i', 'o', 'u'].includes(c.toLowerCase()) ? `|${c}` : `${c}|`).join('\n');
}