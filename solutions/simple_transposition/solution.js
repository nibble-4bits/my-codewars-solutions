function simpleTransposition(text) {
  let queue1 = [], queue2 = [];
  let transposedText = '';
  
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) queue1.push(text[i]);
    else queue2.push(text[i]);
  }
  
  while (queue1.length > 0) {
    transposedText += queue1[0];
    queue1.shift();
  }
  
  while (queue2.length > 0) {
    transposedText += queue2[0];
    queue2.shift();
  }
  
  return transposedText;
}