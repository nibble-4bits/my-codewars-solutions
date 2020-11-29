
var Converter = {
  toAscii: function (hex) {
    return hex.match(/../g).map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
  },
  toHex: function (ascii) {
    return ascii.split('').map(char => char.charCodeAt(0).toString(16)).join('');
  }
}
