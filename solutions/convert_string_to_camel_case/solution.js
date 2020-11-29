function toCamelCase(str){
  let words = str.match(/[A-Za-z]+/g);
  
  if (!words) {
    return "";
  }

  let camelCase = words[0];
  for (let i = 1; i < words.length; i++) {
    camelCase += capitalize(words[i]);
  }
  
  return camelCase;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}