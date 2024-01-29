int findDigit(int num, int nth)
{
    if (nth <= 0) return -1;
    if (num < 0) num = -num;

    int digit{};
    while (nth-- > 0)
    {
        digit = num % 10;
        num /= 10;
    }

    return digit;
}