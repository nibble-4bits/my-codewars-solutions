export function meeting(s: string): string {
  return s.toUpperCase().split(';').map(str => str.replace(/(\w+):(\w+)/, '($2, $1)')).sort().join('');
}