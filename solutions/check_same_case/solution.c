#include <ctype.h>

int same_case (char a, char b)
{
  if (!isalpha(a) || !isalpha(b)) return -1;
  
	return (islower(a) && islower(b)) || (isupper(a) && isupper(b));
}