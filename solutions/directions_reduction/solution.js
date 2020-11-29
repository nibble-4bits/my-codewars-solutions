function dirReduc(arr){
  let arrCopy = arr.slice();
  let i = 0;
  
  while (i < arrCopy.length - 1) {
    if (arrCopy[i] === 'NORTH' && arrCopy[i + 1] === 'SOUTH' ||
        arrCopy[i] === 'SOUTH' && arrCopy[i + 1] === 'NORTH' ||
        arrCopy[i] === 'EAST' && arrCopy[i + 1] === 'WEST'   ||
        arrCopy[i] === 'WEST' && arrCopy[i + 1] === 'EAST') 
    {
      arrCopy.splice(i, 2);
      i = 0;
    }
    else {
      i++;
    }
  }
  
  return arrCopy;
}