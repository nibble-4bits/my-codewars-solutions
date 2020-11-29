export function sortMyString(S: string): string {
  let even = S.split('').filter((x, i) => i % 2 === 0);
  let odd = S.split('').filter((x, i) => i % 2 === 1);
  
  return `${even.join('')} ${odd.join('')}`;
}