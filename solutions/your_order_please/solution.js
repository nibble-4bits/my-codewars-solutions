function order(words){
  return words.split(' ').sort((a, b) => a[a.search(/\d+/)] - b[b.search(/\d+/)]).join(' ');
}