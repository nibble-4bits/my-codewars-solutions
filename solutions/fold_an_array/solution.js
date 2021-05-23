function foldArray(array, runs) {
  let prevArr, foldedArr = array;
  
  for (let run = 0; run < runs; run++) {
    prevArr = foldedArr.slice();
    foldedArr = [];
    for (let i = 0; i <= prevArr.length / 2 - 1; i++) {
      foldedArr.push(prevArr[i] + prevArr[prevArr.length - i - 1]);
    }
    if (prevArr.length % 2 === 1) foldedArr.push(prevArr[Math.floor(prevArr.length / 2)]);
  }
  
  return foldedArr;
}