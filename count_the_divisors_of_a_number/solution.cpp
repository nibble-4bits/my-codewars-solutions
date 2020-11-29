int divisors(long long n)
{
  int numDiv = 0;
  int div = 1;
  
  while (div <= n) {
    if (n % div == 0) {
      numDiv++;
    }
    div++;
  }
  
  return numDiv;
}