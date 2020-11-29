function differentiate(equation, point) {
  let terms = equation
                .split(/(?<=[\dx])(?=[\+-])/);
                
  return modifyTerms(terms).reduce((acc, curr) => {
    let [coeff, exp] = curr.match(/[\+-]?\d+/g);
    return acc + (coeff * exp * (point ** (exp - 1))); 
  }, 0);           
}

function modifyTerms(terms) {
  let newTerms = [];
  
  for (let term of terms) {
    let tempTerm = term;
    if (!/x/.test(term)) { // term independent of x
      continue;
    }
    if (/(?<!\d+)x/.test(term)) { // no coefficient
      if (term[0] === 'x') tempTerm = `1${tempTerm}`; // starts without + or -
      else tempTerm = `${tempTerm.slice(0, 1)}1${tempTerm.slice(1)}`;
    }
    if (/x(?!\^\d+)/.test(term)) { // no exponent
      tempTerm = `${tempTerm}^1`;
    }
    newTerms.push(tempTerm);
  }
  
  return newTerms;
}