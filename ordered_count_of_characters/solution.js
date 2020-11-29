var orderedCount = function (text) {
  return [...text.split('').reduce((map, v) => {
    if (!map.has(v)) map.set(v, 1);
    else map.set(v, map.get(v) + 1);
    return map;
  }, new Map()).entries()];
}