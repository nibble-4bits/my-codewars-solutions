function removeDuplicateWords (s) {
  let words = s.split(" ");
  let unique = [];
  
  for (let word of words) {
    if (!unique.includes(word)) {
      unique.push(word);
    }
  }
  
  return unique.join(" ");
}