function vowelStart(str) {
  return str
          .replace(/[^a-z0-9]/ig, '')
          .split(/(?<=[^aeiou]|[aeiou])(?=[aeiou])/i)
          .map(s => s.toLowerCase())
          .join(' ');
}