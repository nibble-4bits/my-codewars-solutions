#include <stddef.h>

size_t save(size_t n, size_t sizes[n], size_t hd) {
  size_t count = 0;
  size_t sum = 0;
  
  for (size_t i = 0; i < n; i++) {
    if (sum + sizes[i] > hd) break;
    sum += sizes[i];
    count++;
  }
  
  return count;
}