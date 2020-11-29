function adjacentElementsProduct(array) {
  let maxProduct = -Infinity;
  for (let i = 0; i < array.length - 1; i++) {
    const product = array[i] * array[i + 1];
    if (product > maxProduct) maxProduct = product;
  }
  
  return maxProduct;
}