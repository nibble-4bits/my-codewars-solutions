#include <cmath>

typedef unsigned long long ull;
class SumFct
{
  public:
  static ull perimeter(int n);
};

ull SumFct::perimeter(int n) {
  const long double phi = 1.618033988749894;
  ull perimeterFourth = 1;
  ull fib = 1;
  
  if (n == 0) return 4;
  if (n == 1) return 8;
  
  for (int i = 2; i <= n; i++) {
    fib = std::round(fib * phi);
    perimeterFourth += fib;
  }
  
  return 4 * (perimeterFourth + 1);
}
