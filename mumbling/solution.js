function accum(s) {
  return s
          .split('')
          .map((c, i) => c.repeat(i + 1))
          .map(s => `${s[0].toUpperCase()}${s.slice(1).toLowerCase()}`)
          .join('-');
}