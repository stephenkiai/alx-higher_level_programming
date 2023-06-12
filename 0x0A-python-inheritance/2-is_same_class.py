#!/usr/bin/python3
"""Defines a function to confirm class."""


def is_same_class(obj, a_class):
    """Confirm an object is an instance of a given class.

    Args:
        obj (any): Object to check.
        a_class (type): Class to match type of obj to.
    Returns:
        True:If obj is exactly an instance of a_class.
        False:if otherwise
    """
    if type(obj) == a_class:
        return True
    return False
