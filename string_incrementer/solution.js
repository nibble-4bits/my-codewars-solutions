function incrementString (strng) {
  return strng.replace(/(?<=(\w+|))(\d+)?$/, (_match, cg1, cg2) => {
    return cg2 ? (parseInt(cg2) + 1).toString().padStart(cg2.length, '0') : '1';
  });
}