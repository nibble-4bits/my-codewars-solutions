function mineLocation(field){
  let idx = field.reduce((acc, i) => acc.concat(i), []).indexOf(1);
  return [Math.trunc(idx / field[0].length), idx % field[0].length];
}