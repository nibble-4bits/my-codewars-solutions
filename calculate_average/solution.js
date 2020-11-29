function find_average(array) {
  return array.reduce((acc, n) => acc + n) / array.length;
}