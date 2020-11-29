var palindromeChecker = function(string) {
  let left = 0;
  let right = string.length - 1;
  
  while (string[left].toLowerCase() === string[right].toLowerCase()) {
    if (left >= right) {
      return true;
    }
    left++;
    right--;
  }
  
  return false;
}
