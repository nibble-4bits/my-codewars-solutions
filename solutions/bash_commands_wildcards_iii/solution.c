#include <stdbool.h>
#include <stddef.h> /* NULL */
#include <stdlib.h>
#include <string.h>

char **match(const char *pattern, const char **filenames) {
  int pattern_len = strlen(pattern);
  int count = 0;
  int j = 0;
  bool is_match;

  for (const char **p = filenames; *p != NULL; p++) {
    count++;
  }
  char **matches = (char **)calloc(count, sizeof(char *));

  for (const char **p = filenames; *p != NULL; p++) {
    if (strlen(*p) == pattern_len) {
      is_match = true;
      for (int i = 0; i < pattern_len; i++) {
        if (pattern[i] == '?')
          continue;
        if (pattern[i] != (*p)[i]) {
          is_match = false;
        }
      }

      if (is_match) {
        matches[j] = (char *)calloc(pattern_len, sizeof(char));
        strcpy(matches[j], *p);
        j++;
      }
    }
  }

  matches[j] = NULL;

  return matches;
}