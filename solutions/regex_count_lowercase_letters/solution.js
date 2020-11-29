function lowercaseCount(str) {
  let lowercaseTotal = str.match(/[a-z]/g);
  return lowercaseTotal ? lowercaseTotal.length : 0;
}