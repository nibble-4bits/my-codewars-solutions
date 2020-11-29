function listSquared(m, n) {
  let divisors;
  let sumOfSquaredDivisors;
  let list = [];
  
  for (let i = m; i <= n; i++) {
    divisors = getDivisors(i);
    sumOfSquaredDivisors = isSumOfSquaredDivisorsSquare(divisors);
    if (sumOfSquaredDivisors !== -1) {
      list.push([i, sumOfSquaredDivisors]);
    }
  }
  
  return list;
}

function getDivisors(number) {
  let divisorsArray = [];
  
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      if (number / i === i) {
        divisorsArray.push(i);
      }
      else {
        divisorsArray.push(i, number / i);
      }
    }
  }
  
  return divisorsArray;
}

function isSumOfSquaredDivisorsSquare(divisorsArray) {
  let sumOfSquares = divisorsArray
                        .map(x => x ** 2)
                        .reduce((total, curr) => total += curr, 0);
  let isSquare = Number.isInteger(Math.sqrt(sumOfSquares));
  
  if (isSquare) {
    return sumOfSquares;
  }
  
  return -1;
}
