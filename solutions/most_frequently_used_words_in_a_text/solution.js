function topThreeWords(text) {
  let array = [];
  let cleanText = text.replace(/[,\/\.:]/g, '').trim();
  let splitText = cleanText.split(/\s+/);
  
  if (!/[A-Za-z]/.test(splitText)) {
    return [];
  }
  
  splitText.forEach(word => {
    var index = array.findIndex(objItem => objItem.word === word.toLowerCase());
    if (index > -1) {
      array[index].count++;
    }
    else {
      array.push({ word: word.toLowerCase(), count: 1 });
    }
  });
  
  array.sort((a, b) => {
    return b.count - a.count;
  });
  
  let returnArray = [];
  for (let i = 0; i < 3; i++) {
    if (array[i]) {
      returnArray.push(array[i].word);
    }
  }
  
  return returnArray;
}