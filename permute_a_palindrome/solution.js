function permuteAPalindrome (input) { 
  let i = 0;
  
  while (i < input.length) {
    var nextPair = input.indexOf(input[i], i + 1);
    if (nextPair > -1) {
      input = input.replace(input[i], '').replace(input[nextPair], '');
      i = 0;
    }
    else i++;
  }
  
  if (input.length <= 1) return true;
  
  return false;
}