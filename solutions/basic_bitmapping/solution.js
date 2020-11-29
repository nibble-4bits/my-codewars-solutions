const toBits = (set) => {
  let bitMap = new Array(5000).fill(0);
  
  set.split('\n').forEach(x => {
    bitMap[x] = 1;
  });
  
  return bitMap;
}