export function balancedNum(number: number): string {
  let numStr = number.toString();
  let halves: string[];
  if (numStr.length % 2 === 0) halves = [numStr.slice(0, numStr.length / 2 - 1), numStr.slice(numStr.length / 2 + 1)];
  else halves = [numStr.slice(0, Math.floor(numStr.length / 2)), numStr.slice(Math.ceil(numStr.length / 2))];
  
  return halves[0].split('').reduce((acc, x) => acc + +x, 0) === 
         halves[1].split('').reduce((acc, x) => acc + +x, 0) ? 
         'Balanced' : 'Not Balanced';
}
