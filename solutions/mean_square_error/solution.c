#include <stddef.h>
#include <math.h>

double mean_square_error(size_t n, const int a[n], const int b[n]) {
  double avg = 0;

  for (int i = 0; i < n; i++)
    avg += pow(abs(a[i] - b[i]), 2);

  return avg / n;
}