function sqInRect(lng, wdth){
  let squaresArray = [];
  let maxDimension = Math.max(lng, wdth);
  let minDimension = Math.min(lng, wdth);
  
  if (lng === wdth) {
    return null;
  }
  
  while (minDimension > 0) {
    squaresArray.push(minDimension);
    maxDimension -= minDimension;
    [maxDimension, minDimension] = [Math.max(maxDimension, minDimension), Math.min(maxDimension, minDimension)];
  }
  
  return squaresArray;
}