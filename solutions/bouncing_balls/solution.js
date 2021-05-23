function bouncingBall(h,  bounce,  window) {
  console.log(h, bounce, window)
  if (h <= 0 || bounce < 0 || bounce >= 1 || window >= h) return -1;
  
  let timesSeen = 0;
  let newHeight = h;
  while (newHeight > window) {
    newHeight = newHeight * bounce;
    timesSeen++;
  }
  
  return timesSeen * 2 - 1;
}