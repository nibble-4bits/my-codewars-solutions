#include <inttypes.h>
#include <math.h>

#define PAPER_THICKNESS 0.0001

int64_t foldTo (double distance)
{
  if (distance < 0) return -1;
  int folds = 0;
  
  while (distance > PAPER_THICKNESS) {
    folds++;
    distance /= 2;
  }
  
  return folds;
}