function addArrays(array1, array2) {
  const arrayToNumber1 = parseInt(array1.join('')) || 0;
  const arrayToNumber2 = parseInt(array2.join('')) || 0;
  
  const result = [...(arrayToNumber1 + arrayToNumber2).toString()].map(Number);
  if (result[0] === 0) {
    result.shift();
  } else if (isNaN(result[0])) {
    result.shift();
    result[0] *= -1;
  }
  
  return result;
}