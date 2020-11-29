function zeros(n) {
  if (n < 5) return 0;
  else return Math.floor(n / 5) + zeros(n / 5);
}