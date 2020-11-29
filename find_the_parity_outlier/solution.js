function findOutlier(integers){
  const evens = integers.filter(x => x % 2 === 0);
  const odds = integers.filter(x => Math.abs(x % 2) === 1);
  
  return evens.length > odds.length ? odds[0] : evens[0];
}