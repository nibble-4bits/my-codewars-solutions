function generateRange(min, max, step){
  let range = [];
  for (let i = min; i <= max; i += step) range.push(i);
  return range;
}