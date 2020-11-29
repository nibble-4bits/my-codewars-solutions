const removeDuplicateIds = (obj) => {
  let foundLetters = new Set(), newArr;
  
  for (const key of Object.keys(obj).sort((a,b) => +b - +a)) {
    newArr = [];
    for (let i = 0; i < obj[key].length; i++) {
      if (!foundLetters.has(obj[key][i])) {
        newArr.push(obj[key][i]);
        foundLetters.add(obj[key][i]);
      }
    }
    obj[key] = newArr;
  }
  
  return obj;
};