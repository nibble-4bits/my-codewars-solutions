#include <stddef.h>
#include <math.h>

int find_longest(int *numbers, size_t numbers_size)
{
  int digits;
  int max_digits = 0;
  int max_index = 0;
  
  for (size_t i = 0; i < numbers_size; i++) {
    digits = (int) log10(abs(numbers[i])) + 1;
    if (digits > max_digits) {
      max_digits = digits;
      max_index = i;
    }
  }
  
  return numbers[max_index];
}