String.prototype.sixBitNumber = function() {
  return /^(\d|[1-5]\d|6[0-3])$/.test(this);
}