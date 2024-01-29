#include <vector>
#include <algorithm>

std::vector<int> remove_values(const std::vector<int> &integers, const std::vector<int> &values)
{
    auto r{integers};

    for (auto v : values)
    {
        auto ri = std::remove(r.begin(), r.end(), v);
        r.erase(ri, r.end());
    }

    return r;
}