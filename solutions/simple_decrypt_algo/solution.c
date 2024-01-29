#include <ctype.h>
#include <string.h>

void decrypt(const char *encryption, char *key) {
  for (int i = 0; i < 26; i++) key[i] = '0';
  key[26] = '\0';
  
  for (int i = 0; i < (int)strlen(encryption); i++) {
    if (islower(encryption[i])) {
      int key_idx = encryption[i] - 'a';
      key[key_idx] += 1;
    }
  } 
}