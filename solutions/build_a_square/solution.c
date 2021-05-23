#include <stdlib.h>
#include <stddef.h>

char *generate_shape(size_t n) {
  int str_length = n * (n + 1);
  char *shape = calloc(str_length, sizeof(char));

  for (int i = 0; i < str_length; i++) {
    if (i == str_length - 1) {
      shape[i] = '\0';
    } else if (i == (i / n) * (n + 1) - 1) {
      shape[i] = '\n';
    } else {
      shape[i] = '+';
    }
  }

  return shape;
}