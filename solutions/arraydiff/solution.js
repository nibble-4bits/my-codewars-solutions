function array_diff(a, b) {
  b.forEach(bVal => a = a.filter(aVal => aVal !== bVal))
  return a;
}