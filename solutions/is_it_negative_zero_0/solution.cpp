bool isNegativeZero(float n)
{
    int i = *(int *)&n;
    int t = 1 << 31;

    return i == t;
}