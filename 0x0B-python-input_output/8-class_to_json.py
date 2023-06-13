#!/usr/bin/python3
"""Defines function creating dictionary description for JSON serialisation."""

def class_to_json(obj):
    """Returns simple data structure dictionary for serialisation."""
    return obj.__dict__
