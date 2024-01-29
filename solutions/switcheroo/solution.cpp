#include <string>

std::string switcheroo(const std::string &s)
{
    std::string str_copy{s};
    size_t str_size{s.size()};
    for (size_t i{0}; i < str_size; i++)
    {
        if      (str_copy[i] == 'a') str_copy[i] = 'b';
        else if (str_copy[i] == 'b') str_copy[i] = 'a';
    }

    return str_copy;
}