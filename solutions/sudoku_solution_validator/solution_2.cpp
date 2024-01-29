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
    for (int row = 0; row < 9; ++row)
    {
        bool validRow = isValidRow(board, row);
        if (!validRow) return false;
    }

    for (int col = 0; col < 9; ++col)
    {
        bool validCol = isValidCol(board, col);
        if (!validCol) return false;
    }

    for (int box = 0; box < 9; ++box)
    {
        bool validBox = isValidBox(board, box);
        if (!validBox) return false;
    }

    return true;
}