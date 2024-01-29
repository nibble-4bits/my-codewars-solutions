#include <string>

std::string integrate(const int coefficient, const int exponent)
{
    int new_exp{exponent + 1};
    int new_coeff{coefficient / new_exp};
    std::string result{std::to_string(new_coeff) + "x^" + std::to_string(new_exp)};

    return result;
}