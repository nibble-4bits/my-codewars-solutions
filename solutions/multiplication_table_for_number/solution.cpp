#include <string>
#include <sstream>

std::string multi_table(int number)
{
    std::stringstream ss{};

    for (int i = 1; i <= 10; ++i)
    {
        ss << i << " * " << number << " = " << i * number;
        if (i < 10)
        {
            ss << '\n';
        }
    }

    return ss.str();
}