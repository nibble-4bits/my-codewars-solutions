function solve(str, idx) {
  if (str[idx] !== '(') return -1;
  
  const stack = [];
  const slicedStr = str.slice(idx);
  for (let i = 0; i < slicedStr.length; i++) {
    if (slicedStr[i] === '(') stack.push('(');
    else if (slicedStr[i] === ')') {
      const poppedVal = stack.pop();
      if (!poppedVal) return -1;
      else if (stack.length === 0) return i + idx;
    }
  }
  
  return -1;
}