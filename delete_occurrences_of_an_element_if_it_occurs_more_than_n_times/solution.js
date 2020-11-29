function deleteNth(arr, n) {
  let occurrences = {};
  let newArr = [];
  
  for (const num of arr) {
    if (occurrences[num]) {
      if (occurrences[num] < n) {
        occurrences[num]++;
        newArr.push(num);
      }
    } else {
      occurrences[num] = 1;
      newArr.push(num);
    }
  }
  
  return newArr;
}