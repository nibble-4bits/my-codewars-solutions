function getSize(width, height, depth) {
  return [2 * depth * width + 2 * depth * height + 2 * width * height, width * height * depth];
}
