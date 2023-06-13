#!/usr/bin/python3
"""Defines a function that reads text files."""

def read_file(filename=""):
    """Print the read text file to stdout."""
    with open(filename, encoding="utf-8") as f:
        print(f.read(), end="")
