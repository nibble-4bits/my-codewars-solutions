function solve(str) {
  if (str.match(/(\(|\))/g).length === 2) {
    const outsideStr = str.match(/(?<!\()[a-z]*/ig)[0];
    const multiplier = (str.match(/\d+/g) || [1])[0];
    const repeatedStr = str.match(/(?<=\()[a-z]+(?=\))/ig)[0];
    return `${outsideStr}${repeatedStr.repeat(multiplier)}`
  }
  else {
    const outsideStr = str.match(/(?<!\()[a-z]*/ig)[0];
    const multiplier = (str.match(/(?<!\(.*)\d+/g) || [1])[0];
    const repeatedStr = str.match(/(?<=\().+(?=\))/ig)[0];
    return `${outsideStr}${solve(repeatedStr).repeat(multiplier)}`;
  }
}