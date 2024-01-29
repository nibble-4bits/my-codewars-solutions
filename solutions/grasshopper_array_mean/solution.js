var findAverage = function (nums) {
  return nums.reduce((acc, i) => acc + i) / nums.length;
}