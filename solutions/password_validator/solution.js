function password(str) {
  return str.search(/[0-9]/) > -1 && str.search(/[a-z]/) > -1 && str.search(/[A-Z]/) > -1 && str.length >= 8;
}