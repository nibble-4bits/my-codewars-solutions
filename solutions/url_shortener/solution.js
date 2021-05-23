const dbLongURL = {}; // Maps long URL to short URL
const dbShortURL = {}; // Maps short URL to long URL

function genShortURL() {
  let randomLetters = '';
  
  for (let i = 0; i < 4; i++) {
    randomLetters += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  return `short.ly/${randomLetters}`;
}

function urlShortener(longURL) {
  if (longURL in dbLongURL) return dbLongURL[longURL];
  dbLongURL[longURL] = genShortURL();
  dbShortURL[dbLongURL[longURL]] = longURL;
  return dbLongURL[longURL];
}

function urlRedirector(shortURL) {
  return dbShortURL[shortURL];
}