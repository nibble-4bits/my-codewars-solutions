#include <string>

bool valid_spacing(const std::string &s)
{
    if (s[0] == ' ')
    {
        // First character is space
        return false;
    }

    for (size_t i = 1; i < s.size(); ++i)
    {
        // Ignore non-whitespace character
        if (s[i] != ' ')
        {
            continue;
        }

        if (i == s.size() - 1 && s[i] == ' ')
        {
            // Last character is space
            return false;
        }

        if (i < s.size() - 1 && s[i + 1] == ' ')
        {
            // Space is followed by another space
            return false;
        }
    }

    return true;
}
