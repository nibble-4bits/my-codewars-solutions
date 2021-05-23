var moveZeros = function (arr) {
  let newArr = [];
  let zeros = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeros++;
    else newArr.push(arr[i]);
  }
  
  newArr = newArr.concat(Array.from({ length: zeros }, _ => 0));
  
  return newArr;
}