#include <string.h>
#include <stdbool.h>

int match(const char *pattern, const char *filename) {
  if (strlen(pattern) != strlen(filename)) return false;

  for (int i = 0; i < strlen(filename); i++) {
    if (pattern[i] != '?' && pattern[i] != filename[i]) return false;
  }

  return true;
}