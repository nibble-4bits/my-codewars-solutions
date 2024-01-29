#include <vector>
#include <algorithm>
#include <functional>

std::vector<int> dropWhile(const std::vector<int> &arr, std::function<bool(int)> pred)
{
    return {std::find_if_not(arr.cbegin(), arr.cend(), pred), arr.cend()};
}