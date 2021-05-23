function correct(s) {
  const r = { 0: 'O', 1: 'I', 5: 'S' };
  return s.replace(/[015]/g, m => r[m]);
}