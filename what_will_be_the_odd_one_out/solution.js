function oddOneOut(str) {
  let set = new Set();
  
  for (const char of str) {
    if (set.has(char)) {
      set.delete(char);
    }
    else {
      set.add(char);
    }
  }
  
  return [...set];
}
