function findUniq(arr) {
  let dict  = {};
  for (const num of arr) {
    dict[num] = dict[num] ? ++dict[num] : 1;
  }
  return +Object.entries(dict).find(e => e[1] === 1)[0];
}
