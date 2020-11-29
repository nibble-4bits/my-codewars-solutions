function find(rats) {
  return rats.reduce((acc, x) => acc + 2 ** x, 0);
}