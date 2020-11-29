function testit(a,b) {
  const setA = new Set(a);
  const setB = new Set(b);
  
  return [...setA].concat([...setB]).sort((a, b) => a - b );
}