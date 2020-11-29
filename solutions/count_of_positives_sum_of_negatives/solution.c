#include <stddef.h>
#include <stdio.h>

void count_positives_sum_negatives(
  int *values, size_t count, int *positivesCount, int *negativesSum) 
{
  for (int i = 0; i < count; i++) {
    if (values[i] > 0) {
      (*positivesCount)++;
    } else {
      *negativesSum += values[i];
    }
  }
}  