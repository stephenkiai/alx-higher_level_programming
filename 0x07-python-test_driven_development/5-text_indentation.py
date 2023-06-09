#!/usr/bin/python3
"""Defines a function that adds two lines."""

def text_indentation(text):
    """Print text with two new lines after each '.', '?', and ':'.

    Args:
        text (string): text to print.
    Raises:
        TypeError: If text is not a string.
    """
    if not isinstance(text, str):
        raise TypeError("text must be a string")

    conter = 0
    while counter < len(text) and text[counter] == ' ':
        counter += 1

    while counter < len(text):
        print(text[counter], end="")
        if text[counter] == "\n" or text[counter] in ".?:":
            if text[counter] in ".?:":
                print("\n")
            counter += 1
            while counter < len(text) and text[counter] == ' ':
                counter += 1
            continue
        counter += 1
