function nbYear(p0, percent, aug, p) {
  if (p0 >= p) return 0;
  else return 1 + nbYear(p0 + (p0 * percent / 100) + aug, percent, aug, p);
}