#include <stdint.h>

int digits(uint64_t n) {
  int digits = 0;
  
  do {
    n /= 10;
    digits++;
  } while(n > 0);
  
  return digits;
}