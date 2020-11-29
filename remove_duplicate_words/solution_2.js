function removeDuplicateWords (s) {
  let words = s.split(" ");
  let str = "";
  
  for (let word of words) {
    if (!words[word]) {
      words[word] = word;
      str += word + " ";
    }
  }
  
  return str.slice(0, str.length - 1);
}