function shiftedDiff(first, second) {
  let rotated = first;
  let i = 0;
  
  while (rotated !== second && i < second.length) {
    rotated = rotated[rotated.length - 1] + rotated.slice(0, rotated.length - 1);
    i++;
  }
  
  return i !== second.length ? i : -1;
}