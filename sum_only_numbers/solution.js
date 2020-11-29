function sumNumbers(...nums) {
  return nums.reduce((acc, x) => typeof x === 'number' ? acc + x : acc, 0);
}