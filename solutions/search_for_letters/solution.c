#include <stdlib.h>
#include <string.h>

char *change(const char *str_in) {
  char *out = malloc(sizeof(char) * 26);
  
  for (int i = 0; i < 26; i++) {
    out[i] = '0';
  }
  
  for (int i = 0; i < strlen(str_in); i++) {
    if (str_in[i] >= 'A' && str_in[i] <= 'Z') {
      out[str_in[i] - 'A'] = '1';
    } else if (str_in[i] >= 'a' && str_in[i] <= 'z') {
      out[str_in[i] - 'a'] = '1';
    }
  }
  
  return out;
}