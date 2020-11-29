function validBraces(braces){
  while (/(\(\)|\{\}|\[\])/.test(braces)) {
    braces = braces.replace(/(\(\)|\{\}|\[\])/g, '');
  }
  return braces.length === 0;
}