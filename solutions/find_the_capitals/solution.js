var capitals = function (word) {
  return [...word].reduce((a, c, i) => /[A-Z]/.test(c) ? (a.push(i), a) : a, [])
};