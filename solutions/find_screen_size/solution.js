function findScreenHeight(width, ratio) {
  const [num, denom] = ratio.split(':').map(Number);
  return `${width}x${width * denom / num}`
}