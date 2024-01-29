const sumNested = arr => {
  return arr.flat(Infinity).reduce((acc, i) => acc + i, 0);
};