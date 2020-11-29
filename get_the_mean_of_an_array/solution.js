function getAverage(marks){
  return Math.floor(marks.reduce((acc, i) => acc + i) / marks.length);
}