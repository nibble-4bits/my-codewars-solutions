#include <string.h>
#include <stdlib.h>

char* replace_extension(char* string , char* new_ext) {
  if (string == NULL || new_ext == NULL) return NULL;
  if (strpbrk(string, "\\/:")) return NULL;
  
  char *dot_ext = strrchr(string, '.');
  char *replaced = (char *)calloc(strlen(string) + strlen(new_ext) + 1, sizeof(char));
  
  if (dot_ext) {
    strncpy(replaced, string, dot_ext - string);
    if (new_ext[0]) strcat(replaced, ".");
    strcat(replaced, new_ext);
  } else {
    strcat(replaced, string);
    strcat(replaced, ".");
    strcat(replaced, new_ext);
  }
  
  return replaced;
}