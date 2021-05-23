#include <stdlib.h>
#include <string.h>

char *repeater(const char *strin, int n) {
  int string_len = strlen(strin);
  char *repeated = calloc(n * string_len + 1, sizeof(char));

  for (int i = 0; i < n; i++) {
    strcat(repeated, strin);
  }

  return repeated;
}