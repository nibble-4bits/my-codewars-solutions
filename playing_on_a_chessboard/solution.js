function game(n) {
  let expression = 0.5 * n * n;
  return expression % 1 === 0 ? [expression] : [expression * 2, 2];
}