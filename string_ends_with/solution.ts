export function solution(s: string, e: string): boolean {
  for (let i = s.length - 1, j = e.length - 1; i >= s.length - e.length; i--, j--) {
    if (s[i] !== e[j]) return false;
  }
  return true;
}