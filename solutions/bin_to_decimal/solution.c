#include <stdlib.h>

unsigned bin_to_decimal(const char *bin) {
  return strtol(bin, NULL, 2);
}