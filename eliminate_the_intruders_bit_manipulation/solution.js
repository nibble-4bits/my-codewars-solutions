function eliminateUnsetBits(number) {
  return parseInt(number.replace(/0/g, ''), 2) || 0;
}