#include <stdbool.h>

bool is_uppercase(const char *source) {
  for (char *c = source; *c != '\0'; c++) {
    if (*c >= 'a' && *c <= 'z') return false;
  }
  return true;
}