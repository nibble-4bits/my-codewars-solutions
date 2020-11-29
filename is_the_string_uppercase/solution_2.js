String.prototype.isUpperCase = function() {
  return this.search(/[a-z]/) === -1;
}