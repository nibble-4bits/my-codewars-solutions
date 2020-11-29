function wave(str){
  if (!str) return [];
  return new Array(str.length)
              .fill(str.toLowerCase())
              .map((x, i) => `${x.slice(0, i)}${x[i].toUpperCase()}${x.slice(i + 1)}`)
              .filter(x => /[A-Z]/.test(x))
}