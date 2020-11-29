function solve(a, b) {
  return a.split('').filter(x => !b.split('').includes(x)).join('') + 
         b.split('').filter(x => !a.split('').includes(x)).join('');
}