function solve(s) {
  const l = (s.match(/[a-z]/g) || []).length;
  const u = (s.match(/[A-Z]/g) || []).length;
  return l >= u ? s.toLowerCase() : s.toUpperCase();
}