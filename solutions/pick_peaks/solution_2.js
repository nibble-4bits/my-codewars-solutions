function pickPeaks(arr) {
  const result = {pos: [], peaks: []};
  let possiblePeak = 0;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) possiblePeak = i;
    else if (arr[i - 1] > arr[i] && possiblePeak > 0) {
      result.pos.push(possiblePeak);
      result.peaks.push(arr[possiblePeak]);
      possiblePeak = 0;
    }
  }
  
  return result;
}