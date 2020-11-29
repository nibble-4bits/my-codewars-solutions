function gap(num) {
  return Math.max(...(num.toString(2).match(/(?<=)0+(?=1)/g) || ['']).map(x => x.length));
}