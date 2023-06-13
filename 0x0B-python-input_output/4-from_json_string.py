#!/usr/bin/python3
"""Defines a function to turn JSON-to-object."""
import json

def from_json_string(my_str):
    """Return Python object representation of a JSON string."""
    return json.loads(my_str)
