#include <vector>
#include <functional>

std::vector<int> takeWhile(std::vector<int> arr, std::function<bool(int)> pred)
{
    std::vector<int> result;

    for (auto it{arr.begin()}; it != arr.end(); ++it)
    {
        if (pred(*it)) result.push_back(*it);
        else break;
    }

    return result;
}