function abbreviate(string) {
  return string.replace(/\w+/g, (m) => m.length >= 4 ? `${m[0]}${m.length - 2}${m[m.length - 1]}` : m);
}