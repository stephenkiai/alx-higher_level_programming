#!/usr/bin/python3
"""Defines a function to look for methods & attributes."""

def lookup(obj):
    """Returns a list of attributes & methods."""
    return (dir(obj))
