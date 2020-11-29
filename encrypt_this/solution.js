var encryptThis = function(text) {
  return text
         .split(' ')
         .map(word => 
           word
           .replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2')
           .replace(word[0], word[0].charCodeAt())
          )
         .join(' ');
}