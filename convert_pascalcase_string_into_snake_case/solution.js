function toUnderscore(string) {
  if (typeof string === 'number') return string.toString();
  return string.replace(/(?<=[a-z0-9])(?=[A-Z])/g, '_').toLowerCase();
}