function parityBit(binary) {
  let newString = [];

  binary.split(' ').forEach(byte => {
    newString.push((byte.match(/1/g) === null ? [] : byte.match(/1/g))
                    .length % 2 == 1 ? 'error' : byte.slice(0, 7));
  });
  
  return newString.join(' ');
}