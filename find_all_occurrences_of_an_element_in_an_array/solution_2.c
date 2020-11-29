#include <stdlib.h>

size_t *find_all(size_t a, const int array[a], int number, size_t *z) {
  size_t *indices = calloc(a, sizeof(int));
  int j = 0;
  
  for (int i = 0; i < a; i++) {
    if (array[i] == number) {
      indices[j] = i;
      j++;
    }
  }
  
  *z = j;
  
  return indices;
}