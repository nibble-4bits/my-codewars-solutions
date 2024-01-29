#include <string>
#include <cmath>

std::string disariumNumber(int number)
{
    int result{};
    int numCopy{number};
    int pos = std::log10(number) + 1;
    while (numCopy > 0)
    {
        int digit{numCopy % 10};
        result += std::pow(digit, pos);
        --pos;
        numCopy /= 10;
    }

    if (result == number)
    {
        return "Disarium !!";
    }

    return "Not !!";
}