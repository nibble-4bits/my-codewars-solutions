function solution(list){
  let consecutiveStart = list[0];
  let consecutiveCount = 0;
  let rangeStr = '';
  list.push(Infinity);
  
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] === list[i] + 1) { // if next number is consecutive to current number
      consecutiveCount++;
    }
    else {
      if (consecutiveCount >= 2) { // 2 or more numbers are consecutive to consecutiveStart
        rangeStr += `${consecutiveStart}-${consecutiveStart + consecutiveCount},`;
      }
      else if (consecutiveCount === 1) { // Exactly 1 number is consecutive to consecutiveStart
        rangeStr += `${consecutiveStart},${consecutiveStart + consecutiveCount},`;
      }
      else {
        rangeStr += `${list[i]},`;
      }
      consecutiveStart = list[i + 1];
      consecutiveCount = 0;
    }
  }
  
  return rangeStr.slice(0, rangeStr.length - 1);
}