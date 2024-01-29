// NOTE: These functions will only work on little-endian architectures.

#include <string>
#include <cstdint>
#include <sstream>

union fu32
{
    float f;
    uint32_t u32;
};

union du64
{
    double d;
    uint64_t u64;
};

std::string fp32_to_ieee754(float num)
{
    std::ostringstream oss{};
    fu32 ufu32{num};

    for (int i = 31; i >= 0; --i)
    {
        int bit = ufu32.u32 & (1 << i) ? 1 : 0;
        oss << bit;
    }

    std::string str{oss.str()};
    str.insert(1, 1, ' ');
    str.insert(10, 1, ' ');

    return str;
}

std::string fp64_to_ieee754(double num)
{
    std::ostringstream oss{};
    du64 udu64{num};

    for (int i = 63; i >= 0; --i)
    {
        int bit = udu64.u64 & (static_cast<uint64_t>(1) << i) ? 1 : 0;
        oss << bit;
    }

    std::string str{oss.str()};
    str.insert(1, 1, ' ');
    str.insert(13, 1, ' ');

    return str;
}