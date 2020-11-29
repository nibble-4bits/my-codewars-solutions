function mygcd(x,y){
  if (y === 0) return x;
  else return mygcd(y, x % y);
}