function infected(s) {
  return (s
          .split('X')
          .map(x => x.indexOf('1') > -1 ? x.length : 0)
          .reduce((acc , x) => acc + x, 0) / (s.match(/[^X]/g) || [null]).length) * 100;
}