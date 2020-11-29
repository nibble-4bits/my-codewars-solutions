function brainLuck(code, input) {
  const tape = Array.from({ length: 30000 }, _ => 0)
  let inputCopy = input;
  let ptr = 0;
  let i = 0;
  let output = '';
  
  while (i < code.length) {
    const instruction = code[i];
    i++;
    
    switch (instruction) {
        case '>':
          ++ptr;
          break;
        case '<':
          --ptr;
          break;
        case '+':
          tape[ptr] = tape[ptr] < 255 ? ++tape[ptr] : 0;
          break;
        case '-':
          tape[ptr] = tape[ptr] > 0 ? --tape[ptr] : 255;
          break;
        case '.':
          output += String.fromCharCode(tape[ptr]);
          break;
        case ',':
          tape[ptr] = inputCopy[0].charCodeAt();
          inputCopy = inputCopy.slice(1);
          break;
        case '[':
          if (!tape[ptr]) i = jumpForwardIndex(code, i - 1);
          break;
        case ']':
          if (tape[ptr]) i = jumpBackIndex(code, i - 1);
          break;
    }
  }
  
  return output;
}

function jumpForwardIndex(code, startIndex) {
  const stack = [];
  let i = startIndex;
  
  do {
    if (code[i] === '[') stack.push(code[i]);
    else if (code[i] === ']') stack.pop();
    i++;
  } while (stack.length > 0);
  
  return i;
}

function jumpBackIndex(code, startIndex) {
  const stack = [];
  let i = startIndex;
  
  do {
    if (code[i] === ']') stack.push(code[i]);
    else if (code[i] === '[') stack.pop();
    i--;
  } while (stack.length > 0);
  
  return i + 2;
}