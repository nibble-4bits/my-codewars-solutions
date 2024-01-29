#include <vector>

long long determinant(const std::vector<std::vector<long long>> &mat)
{
    if (mat.size() == 1)
    {
        return mat[0][0];
    }

    long long result{};
    for (size_t i = 0; i < mat.size(); ++i)
    {
        std::vector<std::vector<long long>> mat_minor(mat.size() - 1, std::vector<long long>(mat.size() - 1));
        for (size_t j = 1, m = 0; j < mat.size(); ++j, ++m)
        {
            for (size_t k = 0, n = 0; k < mat.size(); ++k)
            {
                if (k == i)
                {
                    continue;
                }

                mat_minor[m][n] = mat[j][k];
                ++n;
            }
        }

        result += (i % 2 == 1 ? -mat[0][i] * determinant(mat_minor) : mat[0][i] * determinant(mat_minor));
    }

    return result;
}