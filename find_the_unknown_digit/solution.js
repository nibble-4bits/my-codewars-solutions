function solveExpression(exp) {
  let usedDigits;
  let eqnSides = exp.split('=');
  let lhs = eqnSides[0];
  let rhs = eqnSides[1];
  let tryExpression, result, formattedExp;
  
  formattedExp = lhs.replace(/(?<=\d|\?)(\+|-|\*)(?=\d|\?|-)/, ' $1 ');
  usedDigits = new Set((exp.match(/\d/g) || []).map(Number));
  
  for (let i = 0; i < 10; i++) {
    if (!usedDigits.has(i)) { 
      tryExpression = formattedExp.replace(/\?/g, i.toString());
      result = eval(tryExpression).toString();
      
      if (result === rhs.replace(/\?/g, i.toString())) return i;
    }
  }
  
  return -1;
}