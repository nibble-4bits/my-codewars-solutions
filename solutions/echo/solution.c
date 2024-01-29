#include <stdio.h>
#include <stdlib.h>

char *echo_program() {
  FILE *fp = fopen("solution.txt", "r");
  long size;
  char *buffer;

  fseek(fp, 0, SEEK_END);
  size = ftell(fp);
  rewind(fp);

  buffer = (char *)malloc(sizeof(char) * size + 1);
  fread(buffer, sizeof(char), size, fp);

  fclose(fp);

  return buffer;
}