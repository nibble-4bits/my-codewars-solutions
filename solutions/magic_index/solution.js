// return the magic index
function findMagic(arr){
  return arr.filter((x, i) => x === i)[0] || -1;
}