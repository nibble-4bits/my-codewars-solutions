function solve(s) {
  return Math.max(
    ...s
    .match(/[^aeiou]+/g)
    .map(sub => [...sub].reduce((a, c) => a + (c.charCodeAt() - 96), 0))
  )
};