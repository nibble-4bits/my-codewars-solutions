function sumTwoSmallestNumbers(numbers) {  
  let min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1)
  let secMin = Math.min(...numbers);
  
  return min + secMin;
}