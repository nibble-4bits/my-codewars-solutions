function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  return [
    input.reduce((acc, x) => x > 0 ? ++acc : acc, 0),
    input.reduce((acc, x) => x < 0 ? acc + x : acc, 0)
  ];
}