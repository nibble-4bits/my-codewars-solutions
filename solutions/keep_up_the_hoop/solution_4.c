#include <stdint.h>

char *hoop_count(uint32_t n) {
  return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}