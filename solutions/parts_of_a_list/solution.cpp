#include <string>
#include <vector>
#include <utility>

class PartList
{
public:
    static std::vector<std::pair<std::string, std::string>> partlist(std::vector<std::string> &arr);
};

std::vector<std::pair<std::string, std::string>> PartList::partlist(std::vector<std::string> &arr)
{
    std::vector<std::pair<std::string, std::string>> partitioned_list(arr.size() - 1);

    for (size_t i = 0; i < arr.size() - 1; ++i)
    {
        std::pair<std::string, std::string> pair{};

        std::string first{};
        for (int j = 0; j <= i; ++j)
        {
            first += arr[j] + (j == i ? "" : " ");
        }
        pair.first = first;

        std::string second{};
        for (int j = i + 1; j < arr.size(); ++j)
        {
            second += arr[j] + (j == arr.size() - 1 ? "" : " ");
        }
        pair.second = second;

        partitioned_list[i] = pair;
    }

    return partitioned_list;
}