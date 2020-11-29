String.prototype.camelCase = function() {
  return this
          .trim()
          .replace(/\b(\w+)\b/g, match => match[0].toUpperCase() + match.slice(1))
          .replace(/ /g, '');
}