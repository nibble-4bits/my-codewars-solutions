double pos_average(char *s, unsigned n) {
  int number_len = 0;
  for (int i = 0; s[i] != ','; i++)
    number_len++;

  int offset = number_len + 2; // Take comma and space into account, hence the `+ 2`
  int total_pos = 0;
  int common_pos = 0;

  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      for (int k = 0; k < number_len; k++) {
        total_pos++;
        if (s[k + (i * offset)] == s[k + (j * offset)]) {
          common_pos++;
        }
      }
    }
  }

  return ((double)common_pos / total_pos) * 100;
}