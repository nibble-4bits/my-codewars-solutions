#include <string>
#include <stack>

std::string remove_parentheses(const std::string &str)
{
    std::stack<int> stack{};
    std::string strCopy{str};
    bool consume{false};

    for (size_t i = 0; i < strCopy.size();)
    {
        char c{strCopy[i]};
        if (c == '(')
        {
            consume = true;
            stack.push(1);
        }

        if (consume) strCopy.erase(i, 1);
        else ++i;

        if (c == ')')
        {
            stack.pop();
            if (stack.empty()) consume = false;
        }
    }

    return strCopy;
}