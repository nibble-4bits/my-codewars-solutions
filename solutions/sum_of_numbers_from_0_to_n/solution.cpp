#include <string>
#include <sstream>

class SequenceSum
{
private:
    int m_count;

public:
    SequenceSum(int);
    std::string showSequence();
};

std::string SequenceSum::showSequence()
{
    if (m_count == 0)
    {
        return "0=0";
    }

    std::stringstream ss{};
    if (m_count < 0)
    {
        ss << m_count << "<0";
        return ss.str();
    }

    int sum = m_count * (m_count + 1) / 2;

    for (int i = 0; i <= m_count; i++)
    {
        ss << i;
        if (i < m_count)
        {
            ss << '+';
        }
        else
        {
            ss << " = " << sum;
        }
    }

    return ss.str();
}

SequenceSum::SequenceSum(int c)
{
    m_count = c;
}