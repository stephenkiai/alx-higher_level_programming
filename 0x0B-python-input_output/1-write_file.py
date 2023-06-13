#!/usr/bin/python3
"""Defines a function to write a file."""

def write_file(filename="", text=""):
    """Write string to a UTF8 text file.

    Args:
        filename (str): Name of file to write.
        text (str): Text to write to file.
    Returns:
        Number of characters written.
    """
    with open(filename, "w", encoding="utf-8") as f:
        return f.write(text)
