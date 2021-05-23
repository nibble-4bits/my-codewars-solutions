function sortByBit(a) {
  return a.reduce((acc, curr) => acc | 1 << curr, 0)
}