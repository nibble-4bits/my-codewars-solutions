#include <stdlib.h>

int hex_to_dec(const char* source) {
  return strtol(source, NULL, 16);
}