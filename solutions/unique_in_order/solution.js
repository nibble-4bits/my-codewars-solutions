function uniqueInOrder(iterable) {
  const unique = [];
  let curr = null;
  
  for (const el of iterable) {
    if (curr !== el) {
      unique.push(el);
      curr = el;
    }
  }
  
  return unique;
}