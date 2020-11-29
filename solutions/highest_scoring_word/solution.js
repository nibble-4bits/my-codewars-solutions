function high(x) {
  let splitString = x.split(' ');
  let scores = splitString
                .map(word => Array.from(word).reduce((acc, i) => acc + (i.charCodeAt(0) - 96), 0));
  
  return splitString[scores.indexOf(Math.max(...scores))];
}