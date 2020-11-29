function alphabetPosition(text) {
  return text
          .toLowerCase()
          .split('')
          .filter(c => /[a-z]/i.test(c))
          .map(c => c.charCodeAt() - 96)
          .join(' ');
}