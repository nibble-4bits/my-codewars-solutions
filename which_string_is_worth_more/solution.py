def highest_value(a, b):
    aSum, bSum = 0, 0
    for char in a:
        aSum += ord(char)
    for char in b:
        bSum += ord(char)
    return a if aSum >= bSum else b