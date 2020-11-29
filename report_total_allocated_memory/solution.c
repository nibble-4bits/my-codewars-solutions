#include <stdlib.h>

unsigned long long total_mem = 0;

void *mem_alloc(size_t size) {
  total_mem += size;
  return malloc(size);
}

unsigned long long report_total_allocated(void) {
  return total_mem;
}