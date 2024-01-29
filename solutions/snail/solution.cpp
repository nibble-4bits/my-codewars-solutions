#include <vector>

enum Direction
{
    RIGHT,
    DOWN,
    LEFT,
    UP,
};

std::vector<int> snail(const std::vector<std::vector<int>> &input_vec)
{
    if (input_vec[0].empty()) return {};

    static Direction next_dir[]{DOWN, LEFT, UP, RIGHT};
    Direction current_dir{RIGHT};
    int vec_size = input_vec.size();
    std::vector<int> snail_vec(vec_size * vec_size);

    const int seq_len{vec_size * 2 - 1};
    std::vector<int> sequence{vec_size - 1, vec_size - 1, vec_size - 1};
    for (int i = 3, j = 2; i < seq_len; i += 2, ++j)
    {
        sequence.push_back(vec_size - j);
        sequence.push_back(vec_size - j);
    }

    int row{0}, col{0}, idx{0};
    for (int i = 0; i < seq_len; ++i)
    {
        for (int j = 0; j < sequence[i]; ++j)
        {
            snail_vec[idx++] = input_vec[row][col];

            if      (current_dir == RIGHT) ++col;
            else if (current_dir == DOWN)  ++row;
            else if (current_dir == LEFT)  --col;
            else if (current_dir == UP)    --row;
        }
        current_dir = next_dir[current_dir];
    }
    snail_vec[idx] = input_vec[row][col];

    return snail_vec;
}