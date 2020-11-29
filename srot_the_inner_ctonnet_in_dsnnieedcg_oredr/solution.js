function sortTheInnerContent(words) {
  return words
          .split(' ')
          .map(w => 
               w[0] +
               w.slice(1, w.length - 1).split('').sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('') +
               (w.length > 1 ? w[w.length - 1] : ''))
          .join(' ');
}