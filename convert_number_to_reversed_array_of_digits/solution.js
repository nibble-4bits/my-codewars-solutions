function digitize(n) {
  return n.toString().split('').map(num => +num).reverse();
}