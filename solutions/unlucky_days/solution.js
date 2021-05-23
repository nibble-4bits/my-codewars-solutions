function unluckyDays(year) {
  let unlucky = 0;
  
  for (let i = 0; i < 12; i++) {
    new Date(year, i, 13).getDay() === 5 && unlucky++;
  }
  
  return unlucky;
}