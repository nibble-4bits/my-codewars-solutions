export function parseF(s: string): number {
  const val = parseFloat(s);
  return !isNaN(val) ? val : null;
}