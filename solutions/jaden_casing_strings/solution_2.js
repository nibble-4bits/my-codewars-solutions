String.prototype.toJadenCase = function () {
  return this.split(' ').map(w => w.replace(/./, m => m.toUpperCase())).join(' ');
};