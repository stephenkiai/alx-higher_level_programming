#!/usr/bin/python3
"""Defines a function to turn a string-to-JSON."""
import json

def to_json_string(my_obj):
    """Returns JSON representation of a string object."""
    return json.dumps(my_obj)
