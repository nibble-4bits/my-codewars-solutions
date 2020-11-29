function getCount(str) {
  return str
          .split('')
          .filter(letter => {
            switch(letter) {
              case 'a':
              case 'e':
              case 'i':
              case 'o':
              case 'u':
                return true;
            }
          })
          .length
}