function interleave(...arrs) {
  let largestLen = Math.max(...arrs.map(arr => arr.length));
  let interleaved = [];
  
  for (let i = 0; i < largestLen; i++)
    for (let j = 0; j < arrs.length; j++)
      interleaved.push(arrs[j][i] !== undefined ? arrs[j][i] : null)

  return interleaved;
}