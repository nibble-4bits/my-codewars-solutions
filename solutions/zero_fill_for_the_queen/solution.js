function zeroFill(number, size) {
  number = Math.abs(~~number); // whole positive integer

  return number.toString().padStart(size, '0');
}