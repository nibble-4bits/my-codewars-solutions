function toCsvText(array) {
  return array.map(subArr => subArr.join(',')).join('\n');
}