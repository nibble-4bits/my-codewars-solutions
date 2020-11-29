function cleanString(s) {
  while (/#/.test(s)) s = s.replace(/.?#/, '');
  return s;
};