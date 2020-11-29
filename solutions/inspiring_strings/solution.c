#include <stdlib.h>
#include <string.h>
#include <stdio.h>

char *longest_word(char *word_str) {
  char *token;
  printf("%s\n", word_str);
  char str[strlen(word_str)];
  char *longest = calloc(50, sizeof(char));
  
  strcpy(str, word_str);
  token = strtok(str, " ");
  strcpy(longest, token);
  while (token != NULL) {
    if (strlen(token) >= strlen(longest)) strcpy(longest, token);
    token = strtok(NULL, " ");
  }
  
  return longest;
}