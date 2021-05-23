function solution(string, limit) {
  const shortened = string.slice(0, limit);
  return `${shortened}${shortened.length < string.length ? '...' : ''}`;
}