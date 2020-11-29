function foldTo(distance) {
  if (distance < 0) return null;
  if (distance === 0 || distance < 0.0001) return 0;
  return Math.ceil(Math.log2(distance * 10000));
}