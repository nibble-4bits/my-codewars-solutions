function findLongest(array){
  const maxLen = Math.max(...array).toString().length;
  return array.filter(n => Math.floor(Math.log10(n)) + 1 === maxLen)[0];
}