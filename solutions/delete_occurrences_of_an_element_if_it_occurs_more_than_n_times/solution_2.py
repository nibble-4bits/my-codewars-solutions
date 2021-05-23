def delete_nth(order, max_e):
    occurrences = {}
    new_list = []
    
    for num in order:
        if num in occurrences:
            if occurrences[num] < max_e:
                occurrences[num] += 1
                new_list.append(num)
        else:
            occurrences[num] = 1
            new_list.append(num)
            
    return new_list