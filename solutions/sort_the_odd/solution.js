function sortArray(array) {
  const newArr = array.slice();
  
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 === 0) continue;
    let min = i;
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[j] % 2 === 0) continue;
      if (newArr[j] < newArr[min]) min = j;
    }
    
    let tmp = newArr[i];
    newArr[i] = newArr[min];
    newArr[min] = tmp;
  }
  
  return newArr;
}