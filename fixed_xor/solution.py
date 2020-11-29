def fixed_xor(a, b):
    if a == '' or b == '':
        return ''
    
    minLen = min(len(a), len(b))

    return hex(int(a[:minLen], 16) ^ int(b[:minLen], 16))[2:].rjust(minLen, '0')