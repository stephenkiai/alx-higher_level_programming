#!/usr/bin/python3
"""Defines a function to confirm if an object is an instance of a class."""

def is_kind_of_class(obj, a_class):
    """Confirm an object is an instance or inherited instance of a class.

    Args:
        obj (any): Object to check.
        a_class (type): Class to match type of obj to.
    Returns:
        True:If obj is an instance or inherited instance of a_class.
        False:if Otherwise.
    """
    if isinstance(obj, a_class):
        return True
    return False
