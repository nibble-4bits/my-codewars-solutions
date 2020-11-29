String.prototype.trim = function(c) {
  if (!c) c = ' ';
  return this.replace(new RegExp(`(^${c}+|${c}+$)`, 'gi'), '');
}