function testit(n) {
  return (n.toString(2).match(/1/g) || []).length;
}