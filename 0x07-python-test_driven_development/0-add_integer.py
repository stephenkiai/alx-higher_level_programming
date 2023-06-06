#!/usr/bin/python3
"""Defines function to add two integers."""

def add_integer(a, b=98):
    """
    Must be either integers or floats.Floats are type casted to
    ints before addition.
    
    Returns an integer addition of a and b.

    Raises:
        TypeError: If either a or b is not an integer and not a float.
    """

    if ((not isinstance(a, int) and not isinstance(a, float))):
        raise TypeError("a must be an integer")
    if ((not isinstance(b, int) and not isinstance(b, float))):
        raise TypeError("b must be an integer")
    return (int(a) + int(b))
    
