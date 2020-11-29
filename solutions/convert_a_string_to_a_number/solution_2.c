#include <string.h>
#include <math.h>

int string_to_number(const char *src) {
  int num = 0;
  int len = strlen(src);
  
  for (int i = len - 1, pos = 1; i >= 0; i--, pos = pow(10, len - i - 1)) {
    if (src[i] == '-') num *= -1;
    else num += (src[i] - '0') * pos;
  }
  
  return num;
}