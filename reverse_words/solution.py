def reverse_words(text):
    return ' '.join(list(map(lambda x: x[::-1], text.split(' '))))