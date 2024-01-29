#include <vector>
#include <string>

std::vector<int> wordValue(const std::vector<std::string> &arr)
{
    std::vector<int> wordValues{};

    for (size_t i = 0; i < arr.size(); i++)
    {
        int strVal{};
        for (auto ch : arr[i])
        {
            if (ch != ' ')
            {
                int charVal{ch - 96};
                strVal += charVal;
            }
        }
        wordValues.push_back(strVal * (i + 1));
    }

    return wordValues;
}