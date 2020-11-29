function capitalize(s, arr) {
  return s.split('').map((c, i) => arr.includes(i) ? c.toUpperCase() : c).join('');
};