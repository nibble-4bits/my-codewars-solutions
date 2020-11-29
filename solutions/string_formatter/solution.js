function format(str, arr) {
  for (const arg of arr) {
    str = str.replace(/\{\}/, arg);
  }
  return str;
}