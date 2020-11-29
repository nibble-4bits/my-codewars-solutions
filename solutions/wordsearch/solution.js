function wordSearch(word, text) {
  return new RegExp(String.raw`\b${word}\b`).test(text);
}