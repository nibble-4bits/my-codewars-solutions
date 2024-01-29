bool isValidRow(unsigned int board[9][9], int row)
{
    bool seen[9] = {false};
    for (int col = 0; col < 9; ++col)
    {
        if (board[row][col] == 0 || seen[board[row][col] - 1]) return false;
        seen[board[row][col] - 1] = true;
    }

    return true;
}

bool isValidCol(unsigned int board[9][9], int col)
{
    bool seen[9] = {false};
    for (int row = 0; row < 9; ++row)
    {
        if (board[row][col] == 0 || seen[board[row][col] - 1]) return false;
        seen[board[row][col] - 1] = true;
    }

    return true;
}

bool isValidBox(unsigned int board[9][9], int box)
{
    bool seen[9] = {false};
    int rowStart = (box / 3) * 3;
    int rowEnd = rowStart + 3;
    int colStart = (box * 3) % 9;
    int colEnd = colStart + 3;

    for (int row = rowStart; row < rowEnd; ++row)
    {
        for (int col = colStart; col < colEnd; ++col)
        {
            if (board[row][col] == 0 || seen[board[row][col] - 1]) return false;
            seen[board[row][col] - 1] = true;
        }
    }

    return true;
}

bool validSolution(unsigned int board[9][9])
{
    for (int i = 0; i < 9; ++i)
    {
        if (!isValidRow(board, i) || !isValidCol(board, i) || !isValidBox(board, i)) return false;
    }

    return true;
}