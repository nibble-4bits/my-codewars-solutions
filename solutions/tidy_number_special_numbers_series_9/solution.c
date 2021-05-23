#include <stdbool.h>

bool tidyNumber(int number) {
  int prev_digit = number % 10;
  number = number / 10;

  while (number > 0) {
    int curr_digit = number % 10;
    number = number / 10;
    if (curr_digit > prev_digit)
      return false;
    prev_digit = curr_digit;
  }

  return true;
}