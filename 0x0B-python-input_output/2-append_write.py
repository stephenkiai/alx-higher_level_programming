#!/usr/bin/python3
"""Defines a function to appending files."""

def append_write(filename="", text=""):
    """Appends a string to the end of text file(UTF8).

    Args:
        filename (str): Name of file to append to.
        text (str): String to append to file.
    Returns:
        Number of characters appended.
    """
    with open(filename, "a", encoding="utf-8") as f:
        return f.write(text)
