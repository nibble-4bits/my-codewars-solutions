#include <stddef.h>
#include <limits.h>

int adjacentElementsProduct(int* inputArray, size_t input_size) {
  int maxProduct = INT_MIN;
  for (int i = 0; i < input_size - 1; i++) {
    int product = inputArray[i] * inputArray[i + 1];
    if (product > maxProduct) maxProduct = product;
  }
  
  return maxProduct;
}