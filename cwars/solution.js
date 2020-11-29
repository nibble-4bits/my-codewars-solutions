function initials(n) {
  return n.split(' ').map((name, i, arr) => {
    if (i === arr.length - 1) {
      return name.slice(0, 1).toUpperCase() + name.slice(1);
    } else {
      return name.slice(0, 1).toUpperCase() + '.';
    }
  }).join('');
}