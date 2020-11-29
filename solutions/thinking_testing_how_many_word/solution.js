function testit(s) {
  return (s.match(/w.*?o.*?r.*?d/ig) || []).length;
}