function arrayInterval(array, start, end) {
  return array.filter(n => n >= start && n <= end);
}