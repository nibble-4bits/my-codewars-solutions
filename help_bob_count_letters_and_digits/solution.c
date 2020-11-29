#include <stddef.h>
#include <ctype.h>
#include <string.h>

size_t count_letters_and_digits(const char *input) {
  size_t count = 0;
  
  for (int i = 0; i < strlen(input); i++) 
    if (isalnum(input[i])) count++;
  
  return count;
}