#!/usr/bin/python3

def no_c(my_string):
    
    my_string1 = ""
    for x in my_string:
        if x not in 'Cc':
            my_string1 += x
    return my_string1
