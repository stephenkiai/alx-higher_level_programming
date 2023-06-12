#!/usr/bin/python3
"""Defines a class MyInt inheriting from int."""

class MyInt(int):
    """Represent invertion of int operators == and !=."""

    def __eq__(self, value):
        """Override == opeartor with != behavior."""
        return self.real != value

    def __ne__(self, value):
        """Override != operator with == behavior."""
        return self.real == value
