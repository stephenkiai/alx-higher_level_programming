#!/usr/bin/python3
"""defines the MyList class"""

class MyList(list):
    """MyList inherits list"""
    def __init__(self):
        """initialize the object"""
        super().__init__()

    def print_sorted(self):
        """print sorted list"""
        print(sorted(self))
