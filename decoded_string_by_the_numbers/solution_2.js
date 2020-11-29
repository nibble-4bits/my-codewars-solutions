function decode(str) {
  if (!str) {
    return [];
  }
  else if (str[0] === '\\') {
    let number = str.match(/\d+/)[0];
    return [str.slice(number.length + 1, parseInt(number) + number.length + 1)].concat(decode(str.slice(parseInt(number) + number.length + 1)));
  }
  else {
    return [str[0]].concat(decode(str.slice(1)));
  }
}