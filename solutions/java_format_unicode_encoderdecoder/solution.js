class JavaUnicodeEncoder{
  static decode(input){
    return input.match(/(?<=u)\w{4}/g).map(c => String.fromCharCode(parseInt(c, 16))).join('');
  }
  
  static encode(input){
    return input.split('').map(c => `\\u${c.charCodeAt().toString(16).padStart(4, '0')}`).join('');
  }
}