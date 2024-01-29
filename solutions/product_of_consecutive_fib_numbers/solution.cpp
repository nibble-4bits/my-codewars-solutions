#include <vector>

using ull = unsigned long long;

class ProdFib
{
public:
    static std::vector<ull> productFib(ull prod);
};

std::vector<ull> ProdFib::productFib(ull prod)
{
    std::vector<ull> result(3);
    ull fib0{0};
    ull fib1{1};
    ull test_prod{};

    do
    {
        test_prod = fib0 * fib1;
        ull next_fib{fib1 + fib0};
        fib0 = fib1;
        fib1 = next_fib;
    } while (test_prod < prod);

    result[0] = fib1 - fib0;
    result[1] = fib0;
    result[2] = test_prod == prod;

    return result;
}