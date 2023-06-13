#!/usr/bin/python3
"""Defines a function that writes using JSON."""
import json

def save_to_json_file(my_obj, filename):
    """Write an object to a text file using JSON."""
    with open(filename, "w") as f:
        json.dump(my_obj, f)
