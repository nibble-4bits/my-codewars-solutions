function wordsToMarks(string) {
  return [...string].map(c => c.charCodeAt() - 96).reduce((acc, i) => acc + i);
}