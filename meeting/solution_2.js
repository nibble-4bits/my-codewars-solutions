function meeting(s) {
  return s.split(';').map(str => str.toUpperCase().replace(/(\w+):(\w+)/, '($2, $1)')).sort().join('');
}