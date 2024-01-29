#include <string>
#include <algorithm>
#include <iterator>

std::string remove_vowels(const std::string &str)
{
    std::string noVowels{};

    std::copy_if(str.begin(),
                 str.end(),
                 std::back_inserter(noVowels),
                 [](char c) { return c != 'a' && c != 'e' && c != 'i' && c != 'o' && c != 'u'; });

    return noVowels;
}