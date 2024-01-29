#include <iostream>

class Add
{
private:
    int m_sum{};

public:
    Add(int initial_val)
        : m_sum{initial_val}
    {
    }

    Add operator()(int val)
    {
        return Add{m_sum + val};
    }

    operator int() const { return m_sum; }

    friend int operator+(const Add &lhs, int rhs)
    {
        return lhs.m_sum + rhs;
    }

    friend int operator+(int lhs, const Add &rhs)
    {
        return lhs + rhs.m_sum;
    }

    friend std::ostream &operator<<(std::ostream &out, const Add a)
    {
        out << a.m_sum;
        return out;
    }
};

auto add(int n)
{
    return Add{n};
}