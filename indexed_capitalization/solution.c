#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char *capitalize(const char *str_in, size_t z, size_t indices[z]) {
  int len = strlen(str_in);
  char *output = calloc(len + 1, sizeof(char));
    
  strcpy(output, str_in);
  
  for (int i = 0; i < z; i++) {
    output[indices[i]] = toupper(output[indices[i]]);
  }
  
  return output;
}