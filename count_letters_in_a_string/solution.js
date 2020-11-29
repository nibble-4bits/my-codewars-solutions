function countLetters (string) {
  if (typeof string !== 'string') return null;
  return [...string].reduce((obj, c) => {
    if (/[a-z]/i.test(c)) {
      if (obj[c.toLowerCase()]) obj[c.toLowerCase()]++;
      else obj[c.toLowerCase()] = 1;
    }
    return obj;
  }, {});
}