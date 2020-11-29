function generateName() {
  const filenameLength = 6;
  let filename;
  
  do {
    filename = '';
    for (let i = 0; i < filenameLength; i++) filename += getRandomLetter();
  } while(photoManager.nameExists(filename));
  
  return filename;
}

function getRandomLetter() {
  let isUppercase = Math.random() > 0.5;
  if (isUppercase) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  } else {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
}