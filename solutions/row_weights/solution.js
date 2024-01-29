function rowWeights(array) {
  return [
    array.filter((_, i) => !(i % 2)).reduce((acc, i) => acc + i, 0),
    array.filter((_, i) => i % 2).reduce((acc, i) => acc + i, 0)
  ]
}