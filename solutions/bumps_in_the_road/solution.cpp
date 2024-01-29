#include <string>
#include <algorithm>

std::string bumps(const std::string &road)
{
    int num_bumps = std::count_if(
        road.cbegin(),
        road.cend(),
        [](char c) { return c == 'n'; });

    return num_bumps <= 15 ? "Woohoo!" : "Car Dead";
}