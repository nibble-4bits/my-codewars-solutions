function solve(a,b){
  return new RegExp(`^${a.replace('*', '.*')}$`).test(b);
}