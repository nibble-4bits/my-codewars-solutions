#include <vector>
#include <string>
#include <sstream>
#include <algorithm>

std::vector<std::string> split_string(const std::string &str, char delim = ' ')
{
    std::vector<std::string> vec{};
    std::stringstream ss{str};
    std::string word{};

    while (std::getline(ss, word, ' '))
    {
        vec.push_back(word);
    }

    return vec;
}

std::vector<std::string> filter_long_words(const std::string &sentence, int n)
{
    std::vector<std::string> split{split_string(sentence)};

    auto it = std::remove_if(split.begin(),
                             split.end(),
                             [n](const auto &str) { return str.size() <= static_cast<size_t>(n); });

    split.erase(it, split.end());

    return split;
}
