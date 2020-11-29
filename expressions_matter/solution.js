function expressionMatter(a, b, c) {
  let maxValues = [a + b + c,
                   a * b * c,
                  a * (b + c),
                  (a + b) * c,
                  a + b * c,
                  a * b + c];
  return Math.max(...maxValues)
}