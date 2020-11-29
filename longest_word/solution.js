function theLongest(text) {
  return text.split(' ').reduce((acc, x) => x.length > acc.length ? x : acc, '');
}