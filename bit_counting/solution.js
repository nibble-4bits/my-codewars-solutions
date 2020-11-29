var countBits = function(n) {
  let onesArr = n.toString(2).match(/1/g);
  return onesArr ? onesArr.length : 0;
};