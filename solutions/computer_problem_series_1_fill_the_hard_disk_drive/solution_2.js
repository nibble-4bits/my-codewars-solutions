function save(sizes, hd) {
  let sum = 0;
  let count = 0;
  
  for (const size of sizes) {
    if (sum + size > hd) break;
    sum += size;
    count++;
  }
  
  return count;
}