#!/usr/bin/python3
"""Defines function to confirm type of inheritance(direct/indirect)."""

def inherits_from(obj, a_class):
    """Confirm an object is an inherited instance of a class.

    Args:
        obj (any): Object to check.
        a_class (type): Class to match the type of obj to.
    Returns:
        True:If obj is an inherited instance of a_class.
        False:if Otherwise.
    """
    if issubclass(type(obj), a_class) and type(obj) != a_class:
        return True
    return False
