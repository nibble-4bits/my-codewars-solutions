function validParentheses(parens){
  while (/(\(\))/.test(parens)) {
    parens = parens.replace(/(\(\))/g, '');
  }
  return parens.length == 0;
}