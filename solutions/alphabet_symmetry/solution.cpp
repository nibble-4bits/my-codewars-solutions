#include <vector>
#include <string>

std::vector<int> solve(const std::vector<std::string> &arr)
{
    std::vector<int> result{};

    for (const auto &str : arr)
    {
        int count{0};
        for (size_t i{0}; i < str.size(); i++)
        {
            char c{str[i]};
            if (std::tolower(c) - 97 == i)
            {
                ++count;
            }
        }

        result.push_back(count);
    }

    return result;
};